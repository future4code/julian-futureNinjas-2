import React, { Component } from 'react'
import Footer from './Footer'
import HomeInicial from './HomeInicial'
import CardServiçoMin from './CardServiçoMin'
import Filtro from './Filtro'
import FormularioTrabalho from './FormularioTrabalho'
import HeaderPrestador from './HeaderPrestador'
import HeaderUsuario from './HeaderUsuario'
import BlocoServicoUsuario from "./BlocoServicoUsuario"


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <HeaderUsuario />
        <BlocoServicoUsuario />
      </div>
    )
  }
}
