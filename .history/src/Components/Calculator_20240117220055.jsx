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
        <button gridSpan={2}>AC</button>
        <button>DEL</button>
        <button operation>÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button operation>x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button operation>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button operation>-</button>
        <button decimal>.</button>
        <button>0</button>
        <button gridSpan={2}>=</button>
   
    </Container>
      
    </>
  )
}

export default Calculator