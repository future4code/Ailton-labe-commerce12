import React, { Component } from 'react'
import styled from 'styled-components';

const Menu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0.5rem;
    justify-content: space-between;
`

export default class ListaCarrinho extends Component {
  render() {
    return (
      <Menu>
        <p>{this.props.quantidade}</p>
        <p>{this.props.name}</p>
        <p>R${this.props.preco},00</p>
      </Menu>
    )
  }
}

