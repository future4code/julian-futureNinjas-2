import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const ContainerServicosContratados = styled.div`
    display:flex;
    justify-content: center;
`
const ContainerCardServicos = styled.div`
    background-color: #ECEBF2;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 50vw;
    padding: 1%;
    margin: 10px;
`
const ContainerSuperiorCardServicos = styled.div`
    display: flex;
    justify-content: space-between;
`
const DescricaoServico = styled.div`
    background-color:  #F4F4F4;
    height: 120px;
    border-radius: 10px;
`
const ButtonContainer = styled.div`
    margin-top: 10px;
    display:flex;
    flex-direction: row-reverse;
`
export class ServicosContratados extends React.Component{
    state = {
        servicosDisponiveis: [
            {
                "title": "Job",
                "description": "Esse é um job muito legal!",
                "value": 10,
                "paymentMethods": ["card"],
                "dueDate": 1571972400
            },
            {
                "title": "Job2",
                "description": "Esse é um job muito legal!",
                "value": 10,
                "paymentMethods": ["card"],
                "dueDate": 1571972400
            }
        ]
    }

    render(){ 
        const listaServicosDisponiveis = this.state.servicosDisponiveis.map((trabalho)=> {
            return(
                <ContainerServicosContratados>
                    <ContainerCardServicos>
                        <ContainerSuperiorCardServicos>
                            <h3>{trabalho.title}</h3>
                            <p>R$ {trabalho.value}</p>
                        </ContainerSuperiorCardServicos>
                        <DescricaoServico>
                            {trabalho.description}
                        </DescricaoServico>
                        <ButtonContainer>
                            <Button variant="contained" color="primary">Cancelar Trabalho</Button>
                        </ButtonContainer>
                    </ContainerCardServicos>
                    
                </ContainerServicosContratados>
            )
        })
        return(
        <div>{listaServicosDisponiveis}</div>
        )
    }
}