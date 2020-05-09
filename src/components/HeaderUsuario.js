import React from "react";
import styled from "styled-components";
import ninjaVerde from "../imagens/ninja-olho-roxo.png"
import { withStyles, Button, Card } from "@material-ui/core";
import { HomeInicial } from "./HomeInicial";
import {ServicosContratados} from "./ServicosContratados"
import HomeUsuario from './HomeUsuario'
import { CardLista } from './CardLista'
import Filtro from './Filtro'
import axios from 'axios'

const HeaderUsuarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  padding-top: 50px;
`
const ImagemNinjaUsuario = styled.img`
  width: 135px;
  text-align: center;
`

const BotoesHeaderUsuarioContainer = styled(Card)`
  background-color: #9B7ED9;
  display: flex;
  width: 750px;
  height: 80px;
  justify-content: space-evenly;
  align-self: center;
`
const BotaoHeaderUsuarioDir = styled(Button)`
  font-size: 13px;
  color: white;
  &:hover {
    font-weight: bold;
  }
  width: 33.3%;
`
const BotaoHeaderUsuarioEsq = styled(Button)`
  font-size: 13px;
  color: white;
  &:hover {
    font-weight: bold;
  }
  width: 33.3%;
  border-right: solid white 1px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

class HeaderUsuario extends React.Component {

  state = {
    menuUsuario: "home",
    servicos: [],

    tituloSearch: '',
    vMinSearch: '',
    vMaxSearch: ''
  }

  aparecerHome = ()=> {
    this.setState({menuUsuario: 'home'})
  }
  aparecerServicosDisponiveis = ()=> {
    this.setState({menuUsuario: 'servicos disponiveis'})
  }
  aparecerServicosContratados = ()=> {
    this.setState({menuUsuario: 'servicos contratados'})
  }

  onTituloChange = (e) => {
    this.setState({tituloSearch: e.target.value}, console.log(this.state.tituloSearch))
  }
  onVMinChange = (e) => {
    this.setState({vMinSearch: e.target.value})
  }
  onVMaxChange = (e) => {
    this.setState({vMaxSearch: e.target.value})
  }

  componentDidMount() {
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

    console.log('componentDidMount chamado')
  }


  render() {
    const { servicos, tituloSearch, vMinSearch, vMaxSearch } = this.state;
    const servicosFiltrados = servicos.filter(
      servico => {
        if(vMaxSearch == '' || Number(vMaxSearch) <= Number(vMinSearch)){
        return servico.title.toLowerCase().includes(tituloSearch.toLowerCase()) && Number(servico.value) >= vMinSearch && Number(servico.value) <= Infinity
        }else if(Number(vMaxSearch) > Number(vMinSearch)){
          return servico.title.toLowerCase().includes(tituloSearch.toLowerCase()) && Number(servico.value) >= vMinSearch && Number(servico.value) <= vMaxSearch
        }
      });
    return(
      <div>
      <HeaderUsuarioContainer>
          <ImagemNinjaUsuario src={ninjaVerde} alt="Imagem do Ninja olho verde"></ImagemNinjaUsuario>
        <BotoesHeaderUsuarioContainer>
          <BotaoHeaderUsuarioEsq color="primary" onClick={this.aparecerHome}>Home</BotaoHeaderUsuarioEsq>
          <BotaoHeaderUsuarioEsq color="primary" onClick={this.aparecerServicosDisponiveis}>Serviços disponíveis</BotaoHeaderUsuarioEsq>
          <BotaoHeaderUsuarioDir
           color="primary" onClick ={this.aparecerServicosContratados}>Serviços contratados</BotaoHeaderUsuarioDir
          >
        </BotoesHeaderUsuarioContainer>
      </HeaderUsuarioContainer>
      {
      this.state.menuUsuario === 'home'?
      <div><HomeUsuario/></div>
      :
      this.state.menuUsuario === 'servicos disponiveis'?
      <div>
        <Filtro onTituloChange={this.onTituloChange} onVMinChange={this.onVMinChange} onVMaxChange={this.onVMaxChange} />
        <CardLista servicosDisponiveis={servicosFiltrados} /></div>:
      <div><ServicosContratados/></div>
      }
      </div>
    );
  }
}

export default HeaderUsuario;