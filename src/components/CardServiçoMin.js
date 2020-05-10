import React, { Component } from "react";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import BlocoServicoUsuario from "./BlocoServicoUsuario";
import axios from "axios";
import Collapse from '@material-ui/core/Collapse'

const CartaoMin = styled(Card)`
  padding: 10px 20px;
  margin: 20px 320px;
  background-color: #ecebf2;
  color: #404040;
  * {
    color: inherit;
  }
  min-height: 70px;
`;
const FilhoCartaoMin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TituloServ = styled(Typography)`
  font-weight: bold;
  width: 30%;
  align-self: center;
  font-size: 1.3rem;
`;
const TextoComp = styled(Typography)`
  font-size: 1.2rem;
  width: 20%;
`;
const BotaoVisualizar = styled(Button)`
  background-color: #8d6ad9;
  color: #ecebf2;
  padding: 5px 20px;
  width: 15%;
  font-weight: bold;
`;
const Descricao = styled(Card)`
    background-color:  #F4F4F4;
    height: 120px;
    padding: 10px;
    margin-left: 15px;
    margin-right: 15px;
`
const ButtonContainer = styled.div`
    margin-top: 10px;
    display:flex;
    flex-direction: row-reverse;
`

export default class CardServiçoMin extends Component {
  state = {
    expanded: false
  }
  trocarEstado =()=>{
    
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    return (
      <div>
      <CartaoMin>
        <FilhoCartaoMin>
          <TituloServ variant="h5">{this.props.servico.title}</TituloServ>
          <TextoComp>R$ {this.props.servico.value}</TextoComp>
          <TextoComp>Prazo: {this.props.servico.dueDate}</TextoComp>
          <BotaoVisualizar onClick={this.trocarEstado}>Visualizar</BotaoVisualizar>
        </FilhoCartaoMin>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <Descricao>
            <Typography variant='h6'>Descrição:</Typography>
            <Typography>{this.props.servico.description}</Typography>
          </Descricao>
          <Typography variant="h5">
            <ul>
              {this.props.servico.paymentMethods.map(pagamento => {
                return(
                  <li>{pagamento}</li>
                )
              })}
            </ul>
          </Typography>
          <ButtonContainer>
            <Button variant="contained" color="primary" onClick= {this.props.pegarId} dataKey={this.props.servico.id} >Contratar</Button>
          </ButtonContainer>
        </Collapse>
      </CartaoMin>
       
     </div>
    );
  }
}
