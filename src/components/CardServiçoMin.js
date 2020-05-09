import React, { Component } from "react";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import BlocoServicoUsuario from "./BlocoServicoUsuario";
import axios from "axios";

const CartaoMin = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 20px 320px;
  background-color: #ecebf2;
  color: #404040;
  * {
    color: inherit;
  }
  height: 70px;
`;
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

export default class CardServiçoMin extends Component {
  render() {
    return (
      <CartaoMin>
        <TituloServ variant="h5">{this.props.servico.title}</TituloServ>
        <TextoComp>R$ {this.props.servico.value}</TextoComp>
        <TextoComp>Prazo: {this.props.servico.dueDate}</TextoComp>
        <BotaoVisualizar>Visualizar</BotaoVisualizar>
      </CartaoMin>
    );
  }
}
