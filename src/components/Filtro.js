import React, { Component } from 'react'
import { Card, TextField } from '@material-ui/core'
import styled from 'styled-components'
// import Filter from '@material-ui/icons/FilterListRounded'

const CartaoFiltro = styled(Card)`
display: flex;
justify-content: space-around;
padding: 10px 0;
margin: 20px 300px;
background-color: #9B7ED9;

`
const InputFiltro = styled(TextField)`
background-color: #ffffff;
border-radius: 5px;
`
// const BotaoFiltro = styled(Button)`
// background-color: #8D6AD9;
// color: #ECEBF2;
// padding: 0 20px;
// font-weight: bold;
// `

export default class Filtro extends Component {

  render() {
    return (
      <CartaoFiltro>
          <InputFiltro
          id="tituloFiltro"
          label="Título"
          required
          type='search'
          variant='filled'
          onChange={this.props.onTituloChange}
        />
          <InputFiltro
          id="valorMinFiltro"
          label="Valor Minimo"
          type='number'
          variant='filled'
          onChange={this.props.onVMinChange}
        />
          <InputFiltro
          id="valorMaxFiltro"
          label="Valor Máximo"
          type='number'
          variant='filled'
          onChange={this.props.onVMaxChange}
        />
        {/* <BotaoFiltro onClick={this.props.onFiltroClick}>Filtrar <Filter/></BotaoFiltro> */}
      </CartaoFiltro>
    )
  }
}