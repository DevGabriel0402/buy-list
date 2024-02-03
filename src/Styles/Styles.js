import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 100px;
  padding: 10px;
  overflow: hidden;

  h1 {
    font-size: 36px;
    text-align: center;
    line-height: 100%;
    color: #0075ff;
    padding: 10px;
  }

  .date {
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hora {
    font-size: 14px;
    text-transform: uppercase;
    padding-block: 10px;
    padding-inline: 5px;

    border: 1px solid #0075ff;
    background-color: #0075ff;
    border-radius: 0 5px 5px 0;
    color: #fff;
  }

  .dia {
    font-size: 12px;
    text-transform: uppercase;
    padding-inline: 2px;
    padding-block: 12px;
    background-color: #f1f1f1;
    color: #0075ff;
    border: 1px solid transparent;
  }

  .semana {
    font-size: 18px;
    text-transform: uppercase;
    padding: 8px;
    border: 1px solid #0075ff;
    background-color: #0075ff;
    border-radius: 5px 0 0 5px;
    color: #fff;
  }
`;

export const AddContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 25px;

  input {
    width: 100%;
    font-size: 20px;
    padding-inline: 10px;
    padding-block: 12px;
    border-radius: 5px;
    border-right: 1px solid transparent;
    border: 2px solid #00000050;

    &:focus {
      outline: none;
      border: 2px solid #0075ff;
    }
  }

  .check:checked {
  }
  button {
    position: absolute;
    right: 0;
    padding: 10px;
    background-color: #0075ff;
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
`;

export const ListContent = styled.div`
  height: fit-content;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow-y: hidden;
  }

  input[type="checkbox"] {
    border: 1px solid transparent;
  }
  input[type="checkbox"]:checked {
    transform: scale(1.5);
    animation: all 0.3s;
    border-radius: 10px;
  }

  input[type="checkbox"]:checked + p {
    text-decoration-line: line-through;
    color: #00000050;
  }
  .list-remove {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 45px;
    gap: 10px;

    button {
      background-color: transparent;
      height: 24px;
      border: none;
      cursor: pointer;

      &:hover {
        animation: shake 1s ease-in;
      }
    }

    .icon-lixeira {
      width: 25px;
      height: 25px;
      transition: 0.2s;
      filter: invert(0);
      opacity: 0.3;
      animation: fadeInRight 0.3s linear;

      &:hover {
        opacity: 1;
      }
    }
  }

  li {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #0075ff;
    padding: 10px;
    border-radius: 10px;
    text-align: start;
    animation: fadeInDown 0.1s linear;

    p {
      color: #fff;
      font-size: 18px;
      padding-left: 10px;
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      50% {
        opacity: 0;
        transform: translateX(20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(10deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(10deg);
    }
    80% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
