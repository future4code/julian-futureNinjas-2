import React, { Component } from "react";
import {
  Card,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";

const Formulario = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 100px 500px;
  padding: 20px 40px 35px 40px;
  background-color: #ecebf2;
  > * {
    margin: 10px 0;
  }
`;
const Titulo = styled(Typography)`
  align-self: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const BotaoCadastro = styled(Button)`
  align-self: center;
  font-weight: bold;
  background-color: #dbd449;
  width: 30%;
  padding: 15px;
  margin-top: 40px;
`;

export default class FormularioTrabalho extends Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputValor: "",
    inputPagamento: "",
    inputPrazo: "",
  };
  handleTituloChange = (event) => {
    this.setState({ inputTitulo: event.target.value });
  };
  handleDescChange = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };
  handleValorChange = (event) => {
    let valor = event.target.value;

    if (valor.toString().includes(",")) {
      valor = valor.toString().replace(",", ".");
      this.setState({ inputValor: Number(valor) });
    }else{
        this.setState({ inputValor: Number(valor) });
    }

    console.log(Number(valor));
  };
  handlePgtoChange = (event) => {
    this.setState({ inputPagamento: event.target.value });
  };
  handlePrazoChange = (event) => {
    this.setState({ inputPrazo: event.target.value });
  };
  handleCadastrar = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <Formulario>
        <Titulo variant="h4">Novo Serviço</Titulo>
        <TextField
          id="titulo"
          label="Título"
          onChange={this.handleTituloChange}
        />
        <TextField
          id="desc"
          multiline
          label="Descrição"
          rows={6}
          onChange={this.handleDescChange}
        />
        <TextField
          id="valor"
          label="Valor (R$)"
          onChange={this.handleValorChange}
        />
        <TextField
          id="pag"
          select
          label="Pagamento"
          value={this.state.inputPagamento}
          onChange={this.handlePgtoChange}
        >
          <MenuItem value="Dinheiro">Dinheiro</MenuItem>
          <MenuItem value="Crédito">Crédito</MenuItem>
          <MenuItem value="Débito">Débito</MenuItem>
        </TextField>
        <TextField id="prazo" label="Prazo" onChange={this.handlePrazoChange} />
        <BotaoCadastro onClick={this.handleCadastrar}>Cadastrar</BotaoCadastro>
      </Formulario>
    );
  }
}
