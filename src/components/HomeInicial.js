import React, { Component } from 'react'
import styled from 'styled-components'
import logoPadrao from "../images/logoPadrao.png"
import Button from '@material-ui/core/Button'

const HomePrincipalLogo = styled.div`
text-align: center;
margin: 0 auto;
justify-content: center;
`

const HomePrincipalBotoes = styled.div`
display: flex;
justify-content: space-evenly;


`

export class HomeInicial extends Component {
    render() {
        return(
            
            <HomePrincipalLogo>
                <img src={logoPadrao}/> 

                

                <HomePrincipalBotoes>            
                <Button variant="contained" color="primary" onClick={this.props.onClickUsuariolegal}>
                    Contratar Serviço
                </Button>
                <Button variant="contained" color="secondary" onClick={this.props.onClickServicos}>
                    Oferecer Serviços
                </Button>
                </HomePrincipalBotoes>  
                
            </HomePrincipalLogo>

           


        )
    }
}