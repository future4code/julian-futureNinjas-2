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
  state = {
    servicos: [],
  };

  aparecerBlocoServicoUsuario = () => {
    this.setState({ menu: "servicos usuario" });
  };

  componentDidMount() {
    this.preencherCardsServicos();
  }
  preencherCardsServicos = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs"
      )
      .then((response) => {
        const dadosApi = response.data.jobs;
        this.setState({ servicos: dadosApi });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const listaDeServicos = this.state.servicos.map((servico) => {
      return (
        <div>
          {this.state.menu === "servicos usuario" ? (
            <BlocoServicoUsuario />
          ) : (
            <CartaoMin>
              <TituloServ variant="h5">{servico.title}</TituloServ>
              <TextoComp>R$ {servico.value}</TextoComp>
              <TextoComp>Prazo: {servico.dueDate}</TextoComp>
              <BotaoVisualizar onClick={() => this.aparecerBlocoServicoUsuario}>
                Visualizar
              </BotaoVisualizar>
            </CartaoMin>
          )}
        </div>
      );
    });
    return <div>{listaDeServicos}</div>;
  }
}
