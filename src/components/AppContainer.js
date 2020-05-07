import React, { Component } from 'react'
import {CardServicosCadastrados} from './CardServicosCadastrados'

import Footer from './Footer'

import { HomeInicial } from './HomeInicial'

import CardServiçoMin from './CardServiçoMin'
import Filtro from './Filtro'
import FormularioTrabalho from './FormularioTrabalho'


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <CardServicosCadastrados/>
      </div>
    )
  }
}
