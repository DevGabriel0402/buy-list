import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;

}

body{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
}

`;
