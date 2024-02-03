import { Fragment, useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';
import { Container, AddContent, ListContent } from '../Styles/Styles'
import Lixeira from '../assets/lixo.png'



const TodoList = () => {

    // Estado para armazenar a lista de compras
    const [Itens, setItems] = useState([])

    // Estado armazenar as novas tarefas
    const [newItem, setNewItem] = useState('')

    const [horaAtual, setHoraAtual] = useState(new Date());




    // Função para adicionar um novo item na lista
    const addItem = () => {
        if (newItem.trim() !== '') { //se novo item for diferente de vazio
            setItems([...Itens, newItem]) // vai adicionar esse novo item na lista de Itens
            setNewItem(''); // E depois setar o como novo item
            console.log(Itens)
        }
    }

    // Função para remover um item da lista
    const removeItem = (index) => {
        const updatedItems = [...Itens]

        updatedItems.splice(index, 1)
        setItems(updatedItems)
    }

    // useEffect para salvar no localStorage quando Itens é atualizado
    useEffect(() => {
        localStorage.setItem('todoListItems', JSON.stringify(Itens));
    }, [Itens]);

    // useEffect para carregar do localStorage quando o componente é montado
    useEffect(() => {
        const storedItems = localStorage.getItem('todoListItems');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        // Limpeza do intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []); // O segundo argumento vazio faz com que o efeito só seja executado na montagem do componente



    return (
        <Fragment>
            <Container>
                <h1>Lista de Compras</h1>
                <div className='date'>
                    <p className='semana'> {format(new Date(), "eeeeee", {
                        locale: ptBR,
                    })}</p>
                    <p className='dia'> {format(new Date(), "dd' de 'MMMM", {
                        locale: ptBR,
                    })}</p>
                    <p className='hora'> {format(horaAtual, "HH':'mm':'ss", {
                        locale: ptBR,
                    })}</p>
                </div>


                <AddContent>
                    <input type="text" value={newItem}
                        onChange={(e) => setNewItem(e.target.value)} />
                    <button onClick={addItem}>+</button>
                </AddContent>
                <ListContent>

                    {Itens.map((item, index) => (
                        <div className='list-remove' key={index}>
                            <li  >
                                <div className='checkmark' ></div>
                                <input className='check' type="checkbox" />
                                <p className='item'>{item}</p>


                            </li>
                            <button onClick={() => removeItem(index)}>
                                <img className='icon-lixeira' src={Lixeira} alt="icon lixeira" />
                            </button>
                        </div>
                    ))}



                </ListContent>
            </Container>


        </Fragment>
    )
}

export default TodoList
