import React from 'react'
import {Container,Screen,Previous,Current} from "../Styles/Main";
  

const Calculator = () => {
  return (
    <>
    <Container>
    
      <Screen>
        <Previous></Previous>
        <Current></Current>
        </Screen>
        <button>AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.App</button>
        <button>0</button>
        <button>=</button>
   
    </Container>
      
    </>
  )
}

export default Calculator