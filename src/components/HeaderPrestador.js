import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-verde.png"
import {Button, Card} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import CardServicosCadastrados from "./CardServicosCadastrados";
import FormularioTrabalho from "./FormularioTrabalho";
import Footer from './Footer'



const MainContainer = styled.div`
background-color: #F5F3FC;

`
const HeaderPrestadorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  padding-top: 50px;
`

const ImagemNinjaPrestador = styled.img`
  width: 135px;
  text-align: center;
`


const BotoesHeaderPrestadorContainer = styled(Card)`
  background-color: #DBD449;
  display: flex;
  width: 500px;
  height: 80px;
  justify-content: space-evenly;
  align-self: center;
  width: 49.9%; 
`
const BotaoHeaderPrestadorEsqu = styled(Button)`
  font-size: 13px;
  color: black;
  width: 100%;
  border-right: solid black 1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  &:hover {
    font-weight: bold;
  }
`
const BotaoHeaderPrestadorDir = styled(Button)`
  font-size: 13px;
  color: black;
  width: 100%;
  &:hover {
    font-weight: bold;
  }
`

// const LinhaVertical = styled.div`
//   border-left: 1px solid black;
//   box-sizing: border-box;
//   height: 80%;
//   width: 1%;
//   margin: 1px 0;
// `


class HeaderPrestador extends React.Component {

  state = {
    menu: 'servicos cadastrados'
  }
  aparecerCardServicos = ()=> {
    this.setState({menu: 'servicos cadastrados'})
  }
  aparecerFormulario = ()=> {
    this.setState({menu: 'adicionar servicos'})
  }
  render() {
    
    return(
      <MainContainer>
      <HeaderPrestadorContainer>
          <ImagemNinjaPrestador src={ninjaVerde} alt="Imagem do Ninja olho verde"></ImagemNinjaPrestador>
        <BotoesHeaderPrestadorContainer>
          <BotaoHeaderPrestadorEsqu color="primary" onClick={this.aparecerCardServicos}>Serviços cadastrados</BotaoHeaderPrestadorEsqu>
          <BotaoHeaderPrestadorDir color="primary" onClick={this.aparecerFormulario}>Adicionar Serviços</BotaoHeaderPrestadorDir>
        </BotoesHeaderPrestadorContainer>
      </HeaderPrestadorContainer>
      {(this.state.menu==='servicos cadastrados' ? 
      <div> 
        <CardServicosCadastrados />
        <Footer/>
       </div>
      :
       <div><FormularioTrabalho /><Footer/></div>)}
      </MainContainer>
    );
  }
}

export default HeaderPrestador;