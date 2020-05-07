import React, { Component } from 'react'
import {CardServicosCadastrados} from './CardServicosCadastrados'

import Footer from './Footer'

import { HomeInicial } from './HomeInicial'

import CardServiçoMin from './CardServiçoMin'
import Filtro from './Filtro'
import FormularioTrabalho from './FormularioTrabalho'
import HeaderPrestador from './HeaderPrestador'
import HeaderUsuario from './HeaderUsuario'
import BlocoServicoUsuario from "./BlocoServicoUsuario"
import CardLista from "./CardLista"
import ServicosContratados from "./ServicosContratados"
import ServicoUsuario from "./ServicoUsuario"


export class AppContainer extends Component {
  render() {
    return (
      <div>
       {/* <HomeInicial />
       <BlocoServicoUsuario />
       <CardLista />
       <CardServiçoMin />
       <CardServicosCadastrados />
       <Filtro />
       <Footer />
       <FormularioTrabalho /> */}
       <HeaderPrestador />
       <HeaderUsuario /> 
       {/* <ServicosContratados />
       <ServicoUsuario /> */}
      </div>
    )
  }
}
