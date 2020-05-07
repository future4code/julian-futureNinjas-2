import React, { Component } from 'react'
import {CardServicosCadastrados} from './CardServicosCadastrados'

import Footer from './Footer'

import { HomeInicial } from './HomeInicial'
import HeaderPrestador from './HeaderPrestador'
import HeaderUsuario from './HeaderUsuario'
import CardServiçoMin from './CardServiçoMin'
import Filtro from './Filtro'
import FormularioTrabalho from './FormularioTrabalho'
import { BlocoServicoUsuario } from './BlocoServicoUsuario'


export class AppContainer extends Component {
  state = {
    pagePrincipal: "inicio"
  }
  pageFornecedor = ()=> {
    this.setState({pagePrincipal: 'fornecedor'})
  }
  pageUsuario= ()=> {
    
    this.setState({pagePrincipal: 'usuario'})
  }
  render() {
    console.log(this.state.pagePrincipal)
    switch(this.state.pagePrincipal){
      case 'inicio':{
        return (
          <div>
          <HomeInicial onClickServicos = {this.pageFornecedor} 
          onClickUsuariolegal={this.pageUsuario}/>
          </div>
        )
      }
      case 'fornecedor':
        return(
          <div>
            <HeaderPrestador/>
          </div>
        )
      
      case 'usuario':
        return(
          <div>
            <HeaderUsuario/>
          </div>
        )
      
    }
  }
}
