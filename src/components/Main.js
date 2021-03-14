import React from 'react'
import Game from './Game'
import { FlexContainer, Mydiv } from './HomeCss'

const Main = (props) => {
    return (
        <FlexContainer>
            <Mydiv style={{width:'13.2rem'}}>
            <Game externalid={props.match.params.id}/>
            </Mydiv>
        </FlexContainer>
    )
}

export default Main
