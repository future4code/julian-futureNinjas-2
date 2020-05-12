import React, { Component } from 'react'
import Footer from './Footer'
import HomeInicial from './HomeInicial'
import CardServiçoMin from './CardServiçoMin'
import FormularioTrabalho from './FormularioTrabalho'
import { BlocoServicoUsuario } from './BlocoServicoUsuario'
import HeaderPrestador from './HeaderPrestador'
import HeaderUsuario from './HeaderUsuario'

export class AppContainer extends Component {

  state = {
    pagePrincipal: "inicio",
    
  }
    
  pageFornecedor = ()=> {
    this.setState({pagePrincipal: 'fornecedor'})
  }
  pageUsuario= ()=> {
    
    this.setState({pagePrincipal: 'usuario'})
  }

  render() {
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
      
    };
  }
}
