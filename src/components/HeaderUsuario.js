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