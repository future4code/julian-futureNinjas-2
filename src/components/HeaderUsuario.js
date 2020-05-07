import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-roxo.png"
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { HomeInicial } from "./HomeInicial";
import CardServiçoMin from "./CardServiçoMin";
import {ServicosContratados} from "./ServicosContratados"


const HeaderUsuarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NinjaHeaderUsuario = styled.div`
  width: 197px;
  height: 163px;
 `

const BotoesHeaderUsuarioContainer = styled.div`
  background-color: #9B7ED9;
  display: flex;
  border-radius: 10px;
  width: 1050px;
  height: 124px;
  justify-content: space-evenly;
  align-self: center;
  
  
`
const BotoesHeaderUsuario = styled(Button)`
  font-size: 25px;
  color: white;
  &:hover {
    font-weight: bold;
  }
`

const LinhaVertical = styled.div`
  border-left: 2px solid white;
  box-sizing: border-box;
  box-shadow: 1px;
  height: 100px;
  margin-top: 13px;
`


class HeaderUsuario extends React.Component {

  state = {
    menuUsuario: "home"
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

  render() {
    return(
      <div>
      <HeaderUsuarioContainer>
        <NinjaHeaderUsuario>
          <img src={ninjaVerde} alt="Imagem do Ninja olho verde"></img>
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
      <div></div>
      :
      this.state.menuUsuario === 'servicos disponiveis'?
      <div> <CardServiçoMin/></div>:
      <div><ServicosContratados/></div>
      }
      </div>
    );
  }
}

export default HeaderUsuario;