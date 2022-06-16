import React, { Component } from "react";
import './App.css';
import styled from 'styled-components';
import Produto from "./Componentes/Produto";
import JaquetaNasa from "./Componentes/Fotos/JaquetaNasa.png"
import Espaco from "./Componentes/Fotos/Espaco.png"
import Balao from "./Componentes/Fotos/Balao.png"
import Lua from "./Componentes/Fotos/Lua.png"
import Caveira from "./Componentes/Fotos/Caveira.png"
import Fluorescente from "./Componentes/Fotos/Fluorescente.png"
import MaisEspaco from "./Componentes/Fotos/MaisEspaco.png"
import Astrobot from "./Componentes/Fotos/Astrobot.png"

const Container = styled.div`
  display:flex;
  flex-direction: column;
`
const Main = styled.main`
  display: flex;
`
const Filtros = styled.div`
  display:flex;
  width: 35%;
  background-color: lightsalmon;
  border-radius: 5px solid black;
  color: white;
  border: 1px solid black;
  padding-left: 1rem;
  flex-direction: column;
`
const InputFiltros = styled.input`
  width: 50%;
`
const Central = styled.div`
  display:flex;
  border-radius: 5px;
  color: black;
  text-align: center;
  flex-direction: column;
`
const AreadosCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  color: black;
  text-align: center;
`
const Carrinho = styled.div`
  display:flex;
  width: 35%;
  background-color: lightsalmon;
  border-radius: 5px solid black;
  color: white;
  border: 1px solid black;
  padding-left: 1rem;
`

class App extends React.Component {

  state ={
    listaDeProdutos:[
      {id: 1, name: "Jaqueta Nasa ", preco: 1000, imageUrl: JaquetaNasa},
      {id: 2, name: "Camisa do Espaco", preco: 300, imageUrl: Espaco},
      {id: 3, name: "Camisa Balao", preco: 200, imageUrl: Balao},
      {id: 4, name: "Camisa Lunar", preco: 350, imageUrl: Lua},
      {id: 5, name: "Camisa Caveira", preco: 400, imageUrl: Caveira},
      {id: 6, name: "Camisa Fluorescente", preco: 150, imageUrl: Fluorescente},
      {id: 7, name: "Mais Espaço", preco: 200, imageUrl: MaisEspaco},
    ],
    filtro: 'Crescente',
  }

  onChangeFilter = (filter) => {
    this.setState({filtro: filter})
    console.log(this.state.filtro)
  }

  filtrarPreco = (filter) => {
    
  }

    render () {

      // const listaFiltrada = this.state.listaDeProdutos.filter((produto) => {
      //   switch (this.state.filtro) {
      //     case 'Crescente':
      //       return  console.log ("Crescente")
      //     case 'Decrescente':
      //       return console.log ("Decrescente")
      //       default:
      //         return 'Crescente'
      //   }
      // })
     

      const mapProduto = this.state.listaDeProdutos.map((produto)=>{
        return (
          <Produto 
          key= {produto.id}
          name={produto.name}
          imageUrl={produto.imageUrl}
          preco={produto.preco}
          />
        )
      })
  
    return (
      <Container>
        <header>
          <img src={Astrobot}></img>
          <h2><i><u>Lojinha do Astrobot</u></i></h2>
          <p>Outras Informações</p>
        </header>
        <Main>
          <Filtros>
            <h1>Filtros</h1>
            <p>Valor mínimo:</p>
            <InputFiltros />
            <p>Valor máximo:</p>
            <InputFiltros />
            <p>Busca por nome:</p>
            <InputFiltros 
            type="text"
           />
          </Filtros>
          <Central>
            <div className="alinhar-main">
              <h4>Quantidade de produtos: {this.state.listaDeProdutos.length}</h4>
              <h4>Ordenação: <select className="alinhar-input" defaultValue={this.state.filtro} onChange={(e)=>{this.onChangeFilter(e.target.value)}} >
                <option value="Decrescente">Decrescente</option>
                <option value="Crescente">Crescente</option>
                </select></h4>
            </div>
            <AreadosCards>
              <div className="alinhar-card">
                {mapProduto}
              </div>
            </AreadosCards>
          </Central>
          <Carrinho>
            <h1>Carrinho</h1>
          </Carrinho>
        </Main>
      </Container>
    );
    }
}

export default App;