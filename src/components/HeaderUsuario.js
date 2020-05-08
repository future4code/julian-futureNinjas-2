import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-roxo.png"
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { HomeInicial } from "./HomeInicial";
import {ServicosContratados} from "./ServicosContratados"
import HomeUsuario from './HomeUsuario'
import { CardLista } from './CardLista'
import Filtro from './Filtro'

const HeaderUsuarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NinjaHeaderUsuario = styled.div`
  width: 10vw;
  height: 8vh;
  margin-bottom: 4vh;
`
const ImagemNinjaUsuario = styled.img`
  width: 8vw;
  height: 12vh;
`

const BotoesHeaderUsuarioContainer = styled.div`
  background-color: #9B7ED9;
  display: flex;
  border-radius: 10px;
  width: 30vw;
  height: 6vh;
  justify-content: space-evenly;
  align-self: center;
`
const BotoesHeaderUsuario = styled(Button)`
  font-size: 13px;
  color: white;
  &:hover {
    font-weight: bold;
  }
`

const LinhaVertical = styled.div`
  border-left: 1px solid white;
  box-sizing: border-box;
  height: 4vh;
  margin-top: 0.9vh;
`


class HeaderUsuario extends React.Component {

  state = {
    menuUsuario: "home",
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

  aparecerHome = ()=> {
    this.setState({menuUsuario: 'home'})
  }
  aparecerServicosDisponiveis = ()=> {
    this.setState({menuUsuario: 'servicos disponiveis'})
  }
  aparecerServicosContratados = ()=> {
    this.setState({menuUsuario: 'servicos contratados'})
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
    return(
      <div>
      <HeaderUsuarioContainer>
        <NinjaHeaderUsuario>
          <ImagemNinjaUsuario src={ninjaVerde} alt="Imagem do Ninja olho verde"></ImagemNinjaUsuario>
        </NinjaHeaderUsuario>
        <BotoesHeaderUsuarioContainer>
          <BotoesHeaderUsuario color="primary" onClick={this.aparecerHome}>Home</BotoesHeaderUsuario>
          <LinhaVertical />
          <BotoesHeaderUsuario color="primary" onClick={this.aparecerServicosDisponiveis}>Serviços disponíveis</BotoesHeaderUsuario>
          <LinhaVertical />
          <BotoesHeaderUsuario color="primary" onClick ={this.aparecerServicosContratados}>Serviços contratados</BotoesHeaderUsuario>
        </BotoesHeaderUsuarioContainer>
      </HeaderUsuarioContainer>
      {
      this.state.menuUsuario === 'home'?
      <div><HomeUsuario/></div>
      :
      this.state.menuUsuario === 'servicos disponiveis'?
      <div>
        <Filtro onTituloChange={this.onTituloChange} onVMinChange={this.onVMinChange} onVMaxChange={this.onVMaxChange} />
        <CardLista servicosDisponiveis={servicosFiltrados} /></div>:
      <div><ServicosContratados/></div>
      }
      </div>
    );
  }
}

export default HeaderUsuario;