import React, { Component } from "react";
import './App.css';
import styled from 'styled-components';
import Produto from "./Componentes/Produto";
import JaquetaNasa from "./Componentes/Fotos/JaquetaNasa.png";
import Espaco from "./Componentes/Fotos/Espaco.png";
import Balao from "./Componentes/Fotos/Balao.png";
import Lua from "./Componentes/Fotos/Lua.png";
import Caveira from "./Componentes/Fotos/Caveira.png";
import Fluorescente from "./Componentes/Fotos/Fluorescente.png";
import MaisEspaco from "./Componentes/Fotos/MaisEspaco.png";
import Astrobot from "./Componentes/Fotos/Astrobot.png";
import ListaCarrinho from "./Componentes/ListaCarrinho";
import Planeta from "./Componentes/Fotos/terra.png";

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
  width: 100%;
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
  flex-direction: column;
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
      {id: 7, name: "Mais Espa??o", preco: 200, imageUrl: MaisEspaco},
    ],
    query: '',
    valMin:'',
    valMax:'',
    filtro: 'Crescente',
    ListaDoCarrinho: []

  }

  updateQuery = (evento) => {
    this.setState({
      query: evento.target.value
    })
  }

  updateValMin = (evento) => {
    this.setState({
      valMin: evento.target.value
    })
  }

  updateValMax = (evento) => {
    this.setState({
      valMax: evento.target.value
    })
  }

  onChangeFilter = (evento) => {
    this.setState({
      filtro: evento.target.value
    })
    
  }
  onClickAdd = (id, name, preco) => {
    const novaLista = [...this.state.ListaDoCarrinho];
    const novaProduto = {
      id: id,
      name: name,
      preco: preco
    };
    novaLista.push(novaProduto);
    this.setState({ListaDoCarrinho: novaLista});
  };

  onClickDel = (produtoID) => {
    const novaLista = this.state.ListaDoCarrinho.filter((produto) =>{
      return produtoID !== produto.id
    })
    this.setState({ListaDoCarrinho: novaLista })
  }
  
  onClickAlert = () => {
    return alert("Para voc?? ?? tudo de gra??a ????")
  }

    render () {    

      const carrinhoSoma = this.state.ListaDoCarrinho.map((item)=>{
        return item.preco
      });
      let sum = 0;
      for (let i = 0; i < carrinhoSoma.length; i++) {
       sum += carrinhoSoma[i];
}

      const mapCarrinho = this.state.ListaDoCarrinho
      .map((produto) =>{
        
        return (
          <ListaCarrinho
          id={produto.id}
          name={produto.name}
          preco={produto.preco}
          remover={this.onClickDel}
          />
        )
      })

      const mapProduto = this.state.listaDeProdutos
      .filter(produto =>{
        return produto.name.toLowerCase().includes(this.state.query.toLowerCase())
      })
      .filter(produto =>{
        return this.state.valMin === '' || produto.preco >= this.state.valMin
      })
      .filter(produto =>{
        return this.state.valMax === '' || produto.preco <= this.state.valMax
      })
      .sort((valorAtual, proxValor)=>{
          switch (this.state.filtro){
            case 'Crescente':
              return valorAtual.preco - proxValor.preco
            default:
              return proxValor.preco - valorAtual.preco
          }
      })
      .map((produto)=>{
        
        return (
          <Produto 
          id= {produto.id}
          name={produto.name}
          imageUrl={produto.imageUrl}
          preco={produto.preco}
          adiciona={this.onClickAdd}
          />
        )
      })

    return (
      <Container>
        <header>
          <img src={Astrobot}></img>
          <h2><i><u>Lojinha do Astrobot</u></i></h2>
          <h1 >??????????? ???? ????</h1>
        </header>
        <Main>
          <Filtros>
            <h1>Filtros</h1>
            <p>Valor m??nimo:</p>
            <InputFiltros 
              type="number"
              value={this.state.valMin}
              onChange={this.updateValMin} 
            />
            <p>Valor m??ximo:</p>
            <InputFiltros 
              type="number"
              value={this.state.valMax}
              onChange={this.updateValMax} 
            />
            <p>Busca por nome:</p>
            <InputFiltros 
              placeholder="Pesquisa"
              value={this.state.query}
              onChange={this.updateQuery}  
           />
           <img className="tamanho-planeta App-logo" src={Planeta}></img>
          </Filtros>
          <Central>
            <div className="alinhar-main">
              <h4>Quantidade de produtos: {mapProduto.length}</h4> 
              
              <h4>Ordena????o: 
                <select 
                className="alinhar-input" 
                name="order" 
                value={this.state.filtro}
                onChange={this.onChangeFilter} >
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
                </select></h4>
            </div>
            <AreadosCards>
              <div className="alinhar-card">
                {mapProduto}
                
              </div>
            </AreadosCards>
          </Central>
          <Carrinho>
            <h1>Carrinho ????</h1>
            <p>{mapCarrinho}</p>
            <h4>Total das Compras: R${sum},00</h4>
            <button className="botao-carrinho" onClick={this.onClickAlert}>???? Pagar</button>
          </Carrinho>
        </Main>
      </Container>
    );
    }
}

export default App;