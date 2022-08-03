import styled from "styled-components";

// all styled

const LoginWraper = styled.div`
  display: flex;
  background-image: url(./images/pens.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    row-gap: 1vw;
  }

  h1 {
    font-size: clamp(1rem, 3vw, 4rem);
  }

  p {
    color: red;
    font-size: clamp(0.4rem, 1vw, 1.5rem);
  }

  input {
    box-sizing: border-box;
    width: 25vw;
    padding: 0.8vw;
    border: none;
    border-bottom: 1px solid grey;
    outline: none;

    font-size: clamp(0.5rem, 1vw, 1.5rem);
    background-color: transparent;
  }

  button {
    padding: 0.5vw 3vw;
    background-color: transparent;
    border-radius: 10px;
    border: 0.5px solid grey;
    font-size: 1.1vw;
    font-weight: bold;
  }
  button:hover {
    background-color: rgb(208, 141, 70);
    transition: 0.5s all ease-in-out;
  }
`;

export { LoginWraper, Form };
