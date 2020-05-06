import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from '@material-ui/core'
import logoClaro from '../imagens/logo-claro.png' 
const FooterNinja = styled(Card)`
position: relative;
background-color: #666;
display: flex;
justify-content: space-between;
padding: 50px 180px;
width: 100%;
>*>*{
  color: #ECEBF2;
  list-style: none;
}
*>*{
  font-size: 1.5rem;
  padding: 0;
  line-height: 35px;
}
`
const Logo = styled.img`
position: absolute;
right: 10px;
bottom: 10px;
width: 100px;
`
const Titulos = styled.h3`
line-height: 10px;
`

export default class Footer extends Component {
  render() {
    return (
      <FooterNinja>
        <div>
          <Titulos>Redes Sociais</Titulos>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div>
        <Titulos>Institucional</Titulos>
        <ul>
            <li>Quem somos</li>
            <li>Nossa missão</li>
            <li>Trabalhe conosco</li>
          </ul>
        </div>
        <div>
        <Titulos>Perguntas Frequentes</Titulos>
        <Logo src={logoClaro}/>
        </div>
      </FooterNinja>
    )
  }
}