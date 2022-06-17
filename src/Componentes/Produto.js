import React, { Component } from 'react'
import styled from 'styled-components';

const Card = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    border: 1px solid black;
    margin: 0.5rem;
    `
const Imagem = styled.img`
    height: 14rem;
    width: 12rem;
`

export default class Produto extends Component {

  render() {
    return (
      <Card>
        <Imagem src={this.props.imageUrl}></Imagem>
        <p>{this.props.name}</p>
        <p>R${this.props.preco},00</p>
        <button onClick={() => this.props.adiciona(this.props.name, this.props.preco)}>Adicionar</button>
      </Card>
      
    )
  }
}
