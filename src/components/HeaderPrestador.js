import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-verde.png"
import Button from "@material-ui/core/Button";

const HeaderPrestadorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NinjaHeaderPrestador = styled.div`
  width: 10vw;
  height: 8vh;
  margin-bottom: 4vh;
`

const ImagemNinjaPrestador = styled.img`
  width: 8vw;
  height: 12vh;
`


const BotoesHeaderPrestadorContainer = styled.div`
  background-color: #DBD449;
  display: flex;
  border-radius: 10px;
  width: 27vw;
  height: 6vh;
  justify-content: space-evenly;
  align-self: center;
  
`
const BotoesHeaderPrestador = styled(Button)`
  font-size: 13px;
  color: black;
  &:hover {
    font-weight: bold;
  }
`

const LinhaVertical = styled.div`
  border-left: 1px solid black;
  box-sizing: border-box;
  height: 4vh;
  margin-top: 0.9vh;
`


class HeaderPrestador extends React.Component {



  render() {
    return(
      <HeaderPrestadorContainer>
        <NinjaHeaderPrestador>
          <ImagemNinjaPrestador src={ninjaVerde} alt="Imagem do Ninja olho verde"></ImagemNinjaPrestador>
        </NinjaHeaderPrestador>
        <BotoesHeaderPrestadorContainer>
          <BotoesHeaderPrestador color="primary">Serviços cadastrados</BotoesHeaderPrestador>
          <LinhaVertical />
          <BotoesHeaderPrestador color="primary">Adicionar Serviços</BotoesHeaderPrestador>
        </BotoesHeaderPrestadorContainer>
      </HeaderPrestadorContainer>
    );
  }
}

export default HeaderPrestador;