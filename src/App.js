import React, { Component } from "react";
import {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #394049;
  border-radius: 5px;
  color: #fff;
  text-align: center;
`

  const Main = styled.main`
  display: flex;
  width: 100vw;
  height:100vh;
`

const Filtros = styled.div`
  width: 10%;
  margin: 2em auto;
  background-color: lightsalmon;
  border-radius: 5px solid black;
  color: #fff;
  text-align: center;
  padding: 1em;
`
const Central = styled.div`
  width: 80%;
  margin: 2em auto;
  background-color: white;
  border-radius: 5px;
  color: black;
  text-align: center;
  padding: 1em;
`
const AreadosCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 2em auto;
  background-color: white;
  border-radius: 5px;
  color: black;
  text-align: center;
  padding: 1em;
`

const Carrinho = styled.div`
  width: 10%;
  margin: 2em auto;
  background-color: lightsalmon;
  border-radius: 5px solid black;
  color: #fff;
  text-align: center;
  padding: 1em;
`

class App extends React.Component {




    render () {
  
    return (
      <Container>
        <header>Espaço do Header</header>
        <Main>
          <Filtros>
            <h1>Filtros</h1>
          </Filtros>
          <Central>
            <h2>Espaço dos cards</h2>
            <AreadosCards>
              <div>Card1</div>
              <div>Card2</div>
              <div>Card3</div>
              <div>Card4</div>
              <div>Card5</div>
            </AreadosCards>
          </Central>
          <Carrinho>
            <h1>Espaço do carrinho</h1>
          </Carrinho>
        </Main>
        <footer>
          Espaço do footer
        </footer>
      </Container>
    );
    }
}

export default App;