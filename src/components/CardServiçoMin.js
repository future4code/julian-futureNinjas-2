import React, { Component } from 'react'
import { Card, TextField, Button, Typography } from '@material-ui/core'
import styled from 'styled-components'

const CartaoMin = styled(Card)`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
margin: 20px 320px;
background-color: #ECEBF2;
color: #404040;
*{
    color: inherit;
}

`
const TituloServ = styled(Typography)`
font-weight: bold;
`
const TextoComp = styled(Typography)`
font-size: 1.2rem;
`
const BotaoVisualizar = styled(Button)`
background-color: #8D6AD9;
color: #ECEBF2;
padding: 5px 20px;
font-weight: bold;
`

export default class CardServiçoMin extends Component {

  render() {
    return (
      <CartaoMin>
          <TituloServ variant='h5'>Serviço X</TituloServ>
          <TextoComp>R$ XXXXX.XX</TextoComp>
          <TextoComp>Prazo: XX dias</TextoComp>
        <BotaoVisualizar onClick={this.props.onVisualizarClick}>Visualizar</BotaoVisualizar>
      </CartaoMin>
    )
  }
}