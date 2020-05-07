import React, { Component } from 'react'
import Footer from './Footer'
import HomeInicial from './HomeInicial'
import CardServiçoMin from './CardServiçoMin'
import { CardLista } from './CardLista'
import Filtro from './Filtro'
import FormularioTrabalho from './FormularioTrabalho'
import HeaderPrestador from './HeaderPrestador'
import HeaderUsuario from './HeaderUsuario'


export class AppContainer extends Component {

  state = {
    servicos: [
      {
        title: "Design de Roupas Maneiras",
        description: "Esse é um job muito legal!",
        value: 4531.23,
        paymentMethods: ["card"],
        dueDate: 2071972400
      },
      {
        title: "Maquiagem Profissional",
        description: "Esse é um job muito legal!",
        value: 112000,
        paymentMethods: ["dinheiro"],
        dueDate: 2465437476
      },
      {
        title: "Construção de Casa Submarina",
        description: "Esse é um job muito legal!",
        value: 400,
        paymentMethods: ["gratidão"],
        dueDate: 2342324
      },
      {
        title: "Design de GOTY",
        description: "Esse é um job muito legal!",
        value: 9000000,
        paymentMethods: ["money"],
        dueDate: 234235523
      },
      {
        title: "Chef Particular",
        description: "Esse é um job muito legal!",
        value: 2120,
        paymentMethods: ["card"],
        dueDate: 56533234
      }
    ],

    tituloSearch: '',
    vMinSearch: '',
    vMaxSearch: ''
  }

  onTituloChange = (e) => {
    this.setState({tituloSearch: e.target.value}, console.log(this.state.tituloSearch))
  }
  onVMinChange = (e) => {
    this.setState({vMinSearch: e.target.value})
  }
  onVMaxChange = (e) => {
    this.setState({vMaxSearch: e.target.value})
  }
  onFiltroClick = (e) => {

  }

  render() {
    const { servicos, tituloSearch, vMinSearch, vMaxSearch } = this.state;
    const servicosFiltrados = servicos.filter(
      servico => {
        if(vMaxSearch == '' || Number(vMaxSearch) <= Number(vMinSearch)){
        return servico.title.toLowerCase().includes(tituloSearch.toLowerCase()) && Number(servico.value) >= vMinSearch && Number(servico.value) <= Infinity
        }else if(Number(vMaxSearch) > Number(vMinSearch)){
          return servico.title.toLowerCase().includes(tituloSearch.toLowerCase()) && Number(servico.value) >= vMinSearch && Number(servico.value) <= vMaxSearch
        }
      });

    return (
      <div>
      <Filtro onTituloChange={this.onTituloChange} onVMinChange={this.onVMinChange} onVMaxChange={this.onVMaxChange} />
      <CardLista servicosDisponiveis={servicosFiltrados} />
      </div>
    )
  }
}
