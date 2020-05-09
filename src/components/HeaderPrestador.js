import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-verde.png"
import {Button, Card} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import CardServicosCadastrados from "./CardServicosCadastrados";
import FormularioTrabalho from "./FormularioTrabalho";
import Footer from './Footer'

const HeaderPrestadorContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 49.5%;
  
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
  height: 80%;
  width: 1%;
  margin: 1px 0;
`


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
      <div>
      <HeaderPrestadorContainer>
          <ImagemNinjaPrestador src={ninjaVerde} alt="Imagem do Ninja olho verde"></ImagemNinjaPrestador>
        <BotoesHeaderPrestadorContainer>
          <BotoesHeaderPrestador color="primary" onClick={this.aparecerCardServicos}>Serviços cadastrados</BotoesHeaderPrestador>
          <LinhaVertical />
          <BotoesHeaderPrestador color="primary" onClick={this.aparecerFormulario}>Adicionar Serviços</BotoesHeaderPrestador>
        </BotoesHeaderPrestadorContainer>
      </HeaderPrestadorContainer>
      {(this.state.menu==='servicos cadastrados' ? 
      <div> 
        <CardServicosCadastrados />
        <Footer/>
       </div>
      :
       <div><FormularioTrabalho /><Footer/></div>)}
      </div>
    );
  }
}

export default HeaderPrestador;