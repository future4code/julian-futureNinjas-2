import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import axios from "axios";


const ContainerGeralBlocoServicoUsuario = styled.div`
    display: flex;
    justify-content: center;
`
const ContainerBlocoServicoUsuario = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    border-radius: 10px;
    background-color: #ECEBF2;
`
const ContainerTitulo =styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: pink;
    border-radius: 10px;
    background-color: #9B7ED9;
`
const ContainerPrecoPrazo = styled.div`
    display: flex;
    justify-content: space-around;
`
const Descricao = styled.div`
    background-color:  #F4F4F4;
    height: 120px;
    border-radius: 10px;
    margin-right: 1%;
    margin-left: 1%;   
`
const ButtonContainer = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row-reverse;
`
export class BlocoServicoUsuario extends React.Component{
    state = {
        listaServicos: [
            {    
                id: [],
                title: [],
                description: [],
                value: [],
                dueDate: []
            }
        ]
    }

    componentDidMount() {
        this.pegarServico();
    }
    
    pegarServico = () => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasTwo/jobs`,
            )
            .then(servico => {
                this.setState({ servico: servico.data });
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    render(){
        const contrataServico = this.state.listaServicos.map((servico) => {
            console.log(servico.data)
            return(
                <ContainerGeralBlocoServicoUsuario>
                    <ContainerBlocoServicoUsuario>
                        <ContainerTitulo>
                            <h2>{servico.title}</h2>
                        </ContainerTitulo>
                        <ContainerPrecoPrazo>
                            <p>{servico.value}</p>
                            <p>{servico.duedate}</p>
                        </ContainerPrecoPrazo>
                        <Descricao>
                            <p>{servico.description}</p>
                        </Descricao>
                        <ButtonContainer>
                            <Button variant="contained" color="primary">Contratar</Button>
                        </ButtonContainer>
                    </ContainerBlocoServicoUsuario>
                </ContainerGeralBlocoServicoUsuario>
            )
        })
        return(
            <div>contrataServico</div>
        )
    }
}

export default BlocoServicoUsuario;