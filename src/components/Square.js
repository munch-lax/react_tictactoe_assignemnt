import React from 'react'

export default function Square(props) {
   const  rendericon=(value)=>{
       
        if(value==='X'){
            return(<i class="times icon" style={{color:'#564ed7'}}></i>)
        }
        else if(value==='O'){
            return(<i class="genderless icon" style={{color:'#ff7a36'}}></i>)
        }

    }
    return (
        <button className="square" onClick={props.onClick}>
            {
            rendericon(props.value)
            }
        </button>
    )
}
