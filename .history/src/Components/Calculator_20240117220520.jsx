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
        <button onClick={appendValueHandler}>7</button>
        <button onClick={appendValueHandler}>8</button>
        <button onClick={appendValueHandler}>9</button>
        <button operation>x</button>
        <button onClick={appendValueHandler}>4</button>
        <button onClick={appendValueHandler}>5</button>
        <button onClick={appendValueHandler}>6</button>
        <button operation>+</button>
        <button onClick={appendValueHandler}>1</button>
        <button onClick={appendValueHandler}>2</button>
        <button onClick={appendValueHandler}>3</button>
        <button operation>-</button>
        <button onClick={appendValueHandler} decimal>.</button>
        <button onClick={appendValueHandler}>0</button>
        <button gridSpan={2}>=</button>
   
    </Container>
      
    </>
  )
}

export default Calculator