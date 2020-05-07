import React, { Component } from 'react'
import CardServiçoMin from './CardServiçoMin'
import Filtro from './Filtro'
export class AppContainer extends Component {
  render() {
    return (
      <div>
      <Filtro/>
        <CardServiçoMin/>
        <CardServiçoMin/>
        <CardServiçoMin/>
        <CardServiçoMin/>
        <CardServiçoMin/>
        <CardServiçoMin/>
        <CardServiçoMin/>
      </div>
    )
  }
}
