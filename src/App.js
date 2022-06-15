import React, { Component } from "react";
import {useState, useEffect} from 'react';
import './App.css';
import styledComponents from "styled-components";

class App extends React.Component {

    render () {
  
    return (
      <div className="App">
        <header>Hello React</header>
        <main>
          <section>
            <h1>Filtros</h1>
          </section>
          <section>
            <h2>Espaço dos cards</h2>
            <div>Card1</div>
            <div>Card2</div>
            <div>Card3</div>
            <div>Card4</div>
            <div>Card5</div>
          </section>
          <section>
            <h1>Espaço do carrinho</h1>
          </section>
        </main>
        <footer>
          Espaço do footer
        </footer>
      </div>
    );
    }
}

export default App;