import React from 'react'
import {Link} from 'react-router-dom'

import { Mydiv,FlexContainer,P,Button,Button2 } from './HomeCss'

const Home = ({history}) => {
    return (
        <FlexContainer>
        
               
               
                <Mydiv>
                <div>
                <i class="massive times icon" style={{color:'#564ed7',marginTop:'-8rem',marginRight:50,marginLeft:'2rem'}}></i>
                <i class="genderless icon" style={{color:'#ff7a36',marginTop:'8rem',fontSize:170,marginLeft:'-9rem'}}></i>
                </div>
                <div><P>Choose your play</P></div>
                <div><P>Choose your play</P></div>
                <Link to='/side'><Button >Play with Ai</Button></Link>
                <Link to='/game2'><Button2>Play with friend</Button2></Link>
                </Mydiv>
                

                </FlexContainer>

        
               
               
                
        
    )
}

export default Home
