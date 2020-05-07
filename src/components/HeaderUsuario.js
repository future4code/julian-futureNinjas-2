import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-roxo.png"
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";


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



  render() {
    return(
      <HeaderUsuarioContainer>
        <NinjaHeaderUsuario>
          <img src={ninjaVerde} alt="Imagem do Ninja olho verde"></img>
        </NinjaHeaderUsuario>
        <BotoesHeaderUsuarioContainer>
          <BotoesHeaderUsuario color="primary">Home</BotoesHeaderUsuario>
          <LinhaVertical />
          <BotoesHeaderUsuario color="primary">Serviços disponíveis</BotoesHeaderUsuario>
          <LinhaVertical />
          <BotoesHeaderUsuario color="primary">Serviços contratados</BotoesHeaderUsuario>
        </BotoesHeaderUsuarioContainer>
      </HeaderUsuarioContainer>
    );
  }
}

export default HeaderUsuario;