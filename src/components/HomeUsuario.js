import React, { Component } from "react";
import styled from "styled-components";
import HeaderUsuario from "./HeaderUsuario";
import Footer from "./Footer";
import { Card, Typography, Button } from "@material-ui/core";
import logoTexto from "../imagens/logo-texto.png";

const Slogan = styled.div`
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  padding: 100px;
  height: 90vh;
`

const Passos = styled.div`
display: flex;
justify-content: space-evenly;
padding: 40px 0;
`

const ComoFunciona = styled(Card)`
  background-color: #9b7ed9;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  border-radius: 0;
`
const ChequeServicos = styled(Button)`
  align-self: center;
  margin: 50px 0;
  color: #9b7ed9;
  background-color: white;
  font-weight: bold;
  padding: 20px 30px;
`
const Titulo = styled(Typography)`
align-self: center;
padding-top: 50px;
color: white;
font-weight: bold;
`
const Apresentação = styled(Card)`
  background-color: white;
  width: 220px;
  height: 220px;
  margin-top: 40px;
  position: relative;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class HomeUsuario extends Component {
  render() {
    return (
      <div>
        <Slogan>
          <img src={logoTexto} />
        </Slogan>
        <ComoFunciona>
        <Titulo variant='h4'>Passo a passo</Titulo>
          <Passos>
            <Apresentação>
              <p>Encontre o serviço</p>
            </Apresentação>

            <Apresentação>
              <p>Busque o melhor preço</p>
            </Apresentação>

            <Apresentação>
              <p>Contrate na hora!</p>
            </Apresentação>
          </Passos>
          <ChequeServicos variant='outlined'>Cheque os serviços disponíveis</ChequeServicos>
        </ComoFunciona>
        <Footer />
      </div>
    );
  }
}
