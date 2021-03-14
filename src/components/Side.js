import React from 'react'
import {Link} from 'react-router-dom'

import { Mydiv,FlexContainer,P,Button,Button2 } from './HomeCss'
const Side = () => {
    return (
        <div>
            <FlexContainer>
        
               
               
        <Mydiv>
        <div>
        <i class="massive times icon" style={{color:'#564ed7',marginTop:'-8rem',marginRight:-70,marginLeft:'2rem'}}></i>
        <i class="genderless icon" style={{color:'#ff7a36',marginTop:'13rem',fontSize:170,marginLeft:'6rem'}}></i>
        <Link to={`/main/${1}`}><input type="radio" style={{position:'relative',top:'6.1rem',left:'-21rem'}}></input></Link>
        <Link to={`/main/${2}`}><input type="radio" style={{position:'relative',top:'6rem',left:'-9rem'}}></input></Link>
        
        </div>
        
        </Mydiv>
        

        </FlexContainer>
        </div>
    )
}

export default Side
