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

  input:last-child {
    padding: 0.5vw 3vw;
    background-color: transparent;
    border-radius: 10px;
    border: 0.5px solid grey;
    font-size: 1.1vw;
    font-weight: bold;
    width: 50%;
  }

  input:last-child:hover {
    background-color: rgb(208, 141, 70);
    transition: 0.5s all ease-in-out;
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

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2vw 5vw;
  box-shadow: 5px 5px 5px -3px black;
  padding: 1vw 1vw;
  align-items: center;

  button {
    display: flex;
  }

  p {
    font-size: 1.5vw;
    margin: 0 1vw;
    text-transform: capitalize;
  }

  span {
    cursor: pointer;
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0.5vw 1vw;
    font-size: 1.2vw;
  }

  button:hover {
    background-color: lightgray;
    transition: 0.5s all;
  }
`;

const H2 = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2vw;
  margin: 2vw 0;
  text-transform: capitalize;
`;

const Profile = styled.div`
  background-image: linear-gradient(
    to bottom right,
    limegreen,
    yellow,
    limegreen
  );
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border-radius: 30px;
  border: 1px solid black;
  text-transform: capitalize;
  color: black;
  padding: 0 0 2.5vw 0;
  border: none;
  box-shadow: 3px 3px 3px 2px grey;

  h3 {
    line-height: 3vw;
    font-size: 1.5vw;
    font-weight: bold;
  }

  span {
    font-weight: 100;
  }
  p {
    font-size: 8vw;
    padding: 1vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export { LoginWraper, Form, Div, H2, Profile, Container };
