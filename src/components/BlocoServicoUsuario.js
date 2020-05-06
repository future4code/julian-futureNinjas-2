import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

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
    render(){
        return(
            <ContainerGeralBlocoServicoUsuario>
                <ContainerBlocoServicoUsuario>
                    <ContainerTitulo>
                        <h2>teste</h2>
                    </ContainerTitulo>
                    <ContainerPrecoPrazo>
                        <p>R$ XXX,XX</p>
                        <p>Prazo: XX dias</p>
                    </ContainerPrecoPrazo>
                    <Descricao>
                        <p>descricao</p>
                    </Descricao>
                    <ButtonContainer>
                            <Button variant="contained" color="primary">Contratar</Button>
                    </ButtonContainer>
                </ContainerBlocoServicoUsuario>
            </ContainerGeralBlocoServicoUsuario>
        )
    }
}