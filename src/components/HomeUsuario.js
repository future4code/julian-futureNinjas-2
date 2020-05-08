import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderUsuario from './HeaderUsuario'
import Footer from './Footer'
import logoTexto from '../imagens/logo-texto.png'

const Slogan = styled.div`
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    padding: 100px;



`

const ComoFunciona = styled.div`
    background-color: #9B7ED9;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 100px;
    

`
const Apresentação = styled.div`
    background-color: white;
    width: 220px;
    height: 220px ;
    margin-top: 40px;
    position: relative;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`






export default class HomeUsuario extends Component {
    render() {
        return(
        <div>
            <Slogan>
            <img src={logoTexto}/>
            </Slogan>
            <ComoFunciona>
                <Apresentação>
                    <p>Encontre o serviço</p>
                </Apresentação>

                <Apresentação>
                    <p>Busque o melhor preço</p>
                </Apresentação>

                 <Apresentação>
                    <p>Contrate na hora!</p>
                </Apresentação>
              
            </ComoFunciona>

           <Footer/>
        </div>
            
        )
    }
}