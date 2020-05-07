import React from 'react'
import styled from 'styled-components'
import { Typography, Button, Card } from '@material-ui/core';

const ContainerGeral = styled(Card)`
    display: flex;
    justify-content: center;
`
const CardContainer = styled(Card)`
    background-color: #ECEBF2;
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 600px;
`

const TituloContainer = styled(Card)`
    align-self: center;
    background-color: #DBD449;
    text-align: center;
    width: 100%;
    padding: 10px 10px;
    *{
    font-weight: bold;
    }
`
const ContainerSuperior = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
    margin: 0;
`
const ContainerInferior = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 10px 20px;
    margin: 0;
`
const Descricao = styled(Card)`
    background-color:  #F4F4F4;
    height: 120px;
    padding: 10px;
    margin-left: 15px;
    margin-right: 15px;
`
const ButtonContainer = styled.div`
    margin: 15px 15px;
    display:flex;
    flex-direction: row-reverse;
`
export default class CardServicosCadastrados extends React.Component{
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
                    <TituloContainer>
                            <Typography variant='h4'>{trabalho.title}</Typography>
                            </TituloContainer>
                        <ContainerSuperior>
                            <Typography variant='h6'>R${trabalho.value}</Typography>
                            <Typography variant='h6'>Pagamento: {trabalho.paymentMethods}</Typography>
                        </ContainerSuperior>
                        <Descricao>
                        <Typography variant='h6'>Descrição:</Typography>
                            <Typography>{trabalho.description}</Typography>
                        </Descricao>
                        <ContainerInferior>
                        <Typography variant='h6'>Prazo: {trabalho.dueDate}</Typography>
                            <Typography variant='h6'>Em aberto</Typography>
                        </ContainerInferior>
                        <ButtonContainer>
                            <Button variant="contained" color="secondary">Excluir</Button>
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