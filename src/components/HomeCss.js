import styled from 'styled-components'


export const Mydiv=styled.div`




height:100%;
width:30rem;
background:#f7f7f7;
display:flex;
justify-content:center;

@media screen and (max-width :700px){
    width:100vh;
}

`




export const FlexContainer=styled.div`

position:absolute;
top:0;
left:0;
height:100%;
width:100%;
background:#f7f7f7;
display:flex;
clear: both;
justify-content:center;



}
`
export const P=styled.p`
position:absolute;
height:20px;
width:400px;

top:16rem;
left:42.5rem;
font-size:1.5rem;
display:flex;

@media only screen and (max-width : 700px){
    position:absolute;
    left:12rem;
    
    
    
}
`

export const Button=styled.button`
position:absolute;
height:30px;
width:160px;
border-radius:10px;
top:22rem;
left:42.5rem;
background:#564ed7;
text-align: center;
font-size:1.5rem;
padding-left:20px;
display:flex;



@media only screen and (max-width : 700px){
    position:absolute;
    left:12rem;
    
    
    
}
`
export const Button2=styled.button`
position:absolute;
height:30px;
width:160px;
border-radius:10px;
top:27rem;
left:42.5rem;

text-align: center;
font-size:1.5rem;
padding-left:3px;
display:flex;



@media only screen and (max-width : 700px){
    position:absolute;
    left:12rem;
    
    
    
}
`