import React, { Component } from 'react'
import styled from 'styled-components';

const Card = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    margin: 0.5rem;
    `

export default class Carrinho extends Component {
  render() {
    return (
      <Card>
        <p>{this.props.name}</p>
        <p>R${this.props.preco},00</p>
        <button>Adicionar</button>
      </Card>
    )
  }
}
