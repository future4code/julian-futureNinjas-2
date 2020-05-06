import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const ContainerGeral = styled.div`
    display: flex;
    justify-content: center;
`
const CardContainer = styled.div`
    background-color: #ECEBF2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 1%;
    margin: 10px;
`
const ContainerSuperior = styled.div`
    display: flex;
    justify-content: space-between;
`
const Descricao = styled.div`
    background-color:  #F4F4F4;
    height: 120px;
    border-radius: 10px;
`
const ButtonContainer = styled.div`
    margin-top: 10px;
    display:flex;
    flex-direction: row-reverse;
`
export class CardServicosCadastrados extends React.Component{
    state = {
        trabalhos: [
            {
                "title": "Job",
                "description": "Esse é um job muito legal!",
                "value": 10,
                "paymentMethods": ["card"],
                "dueDate": 1571972400
            },
            {
                "title": "Job",
                "description": "Esse é um job muito legal!",
                "value": 10,
                "paymentMethods": ["card"],
                "dueDate": 1571972400
            }
        ]
    }
    render(){
        const listaTrabalhos = this.state.trabalhos.map((trabalho) =>{
            return (
                <ContainerGeral>
                    <CardContainer>
                        <ContainerSuperior>
                            <h3>{trabalho.title}</h3>
                            <p>R${trabalho.value}</p>
                            <p>Em aberto</p>
                        </ContainerSuperior>
                        <h4>Descrição:</h4>
                        <Descricao>
                            {trabalho.description}
                        </Descricao>
                        <ButtonContainer>
                            <Button variant="contained" color="primary">Excluir</Button>
                        </ButtonContainer>
                    </CardContainer>
                </ContainerGeral>
            )
        })
        return(
            <div>
                {listaTrabalhos}
            </div>
            
        )
    }
}