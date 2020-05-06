import React, { Component } from 'react'
import styled from 'styled-components'
import logoPadrao from "../images/logoPadrao.png"
import Button from '@material-ui/core/Button'

const HomePrincipalLogo = styled.div`
text-align: center;
margin: 0 auto;
`

const HomePrincipalBotoes = styled.div`
display: flex;
justify-content: center;


`

export class HomeInicial extends Component {
    render() {
        return(
            <div>
                <HomePrincipalLogo>
                <img src={logoPadrao}/> 

                </HomePrincipalLogo>

                <HomePrincipalBotoes>            
                <Button variant="contained" color="primary">
                    Contratar Serviço
                </Button>
                <Button variant="contained" color="secondary">
                    Oferecer Serviços
                </Button>
                </HomePrincipalBotoes>  
                
            </div>

           


        )
    }
}