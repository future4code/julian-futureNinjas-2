import React, { Component } from "react";
import {
  Card,
  Button,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  TextField,
  Typography,
} from "@material-ui/core";
import styled from "styled-components";
import axios from 'axios';

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
    inputPagamento: [],
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
  };
  // handlePgtoChange = (event) => {
  //   this.setState({ inputPagamento: event.target.value });
  // };

  handleCheckbox = (event) => {
    if(event.target.checked){
      let novoItem = event.target.value
      let novaLista = [...this.state.inputPagamento, novoItem]
      this.setState({ inputPagamento: novaLista })
      console.log(novaLista)
    }else if(!event.target.checked){
      let removeItem = event.target.value
      let lista = this.state.inputPagamento
      let novaLista = lista.filter(item => {
        return item != removeItem
      })
      this.setState({inputPagamento: novaLista})
      console.log(novaLista)
    }
  }
  handlePrazoChange = (event) => {
    this.setState({ inputPrazo: event.target.value });
  };
  handleCadastrar = (event) => {
    event.preventDefault();

    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      value: this.state.inputValor,
      paymentMethods: this.state.inputPagamento,
      dueDate: this.state.inputPrazo
    }

    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs`, 
    body)
    .then(res => {
      window.alert("Serviço adicionado com sucesso", res);
    })
    .catch((err) => {
      window.alert("Ocorreu um erro", err.response);
    });

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
          type='number'
          onChange={this.handleValorChange}
        />
      <FormControl component="fieldset">
      <FormLabel>Pagamento</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Cartão de Crédito/Débito"
          control={<Checkbox color="primary" onChange={this.handleCheckbox}/>}
          label="Cartão de Crédito/Débito"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Dinheiro"
          control={<Checkbox color="primary" onChange={this.handleCheckbox}/>}
          label="Dinheiro"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Boleto"
          control={<Checkbox color="primary" onChange={this.handleCheckbox}/>}
          label="Boleto"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
        {/* <TextField
          id="pag"
          select
          label="Pagamento"
          value={this.state.inputPagamento}
          onChange={this.handlePgtoChange}
        >
          <MenuItem value="Dinheiro">Dinheiro</MenuItem>
          <MenuItem value="Crédito">Crédito</MenuItem>
          <MenuItem value="Débito">Débito</MenuItem>
        </TextField> */}
        <TextField id="prazo" label="Prazo" onChange={this.handlePrazoChange} />
        <BotaoCadastro onClick={this.handleCadastrar}>Cadastrar</BotaoCadastro>
      </Formulario>
    );
  }
}
