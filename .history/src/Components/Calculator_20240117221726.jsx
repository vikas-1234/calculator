import React, { useState } from 'react'
import {Container,Screen,Previous,Current} from "../Styles/Main";
  

const Calculator = () => {

  const[current,setCurrent]= useState('');
  const[previous,setPrevious]= useState('');
  const[operations,setOperations]= useState('');
  const appendValueHandler = (el) =>{
    const value=el.target.getAttribute("data");
    if(value === '.' && current.includes('.')) return 
    setCurrent(current + value);
  }
  return (
    <>
    <Container>
    
      <Screen>
        <Previous>{previous} {operations}</Previous>
        <Current>{current}</Current>
        </Screen>
        <button gridSpan={2}>AC</button>
        <button>DEL</button>
        <button operation>÷</button>
        <button  data ={7} onClick={appendValueHandler}>7</button>
        <button data ={8} onClick={appendValueHandler}>8</button>
        <button  data ={9} onClick={appendValueHandler}>9</button>
        <button operation>x</button>
        <button data ={4} onClick={appendValueHandler}>4</button>
        <button data ={5} onClick={appendValueHandler}>5</button>
        <button data ={6} onClick={appendValueHandler}>6</button>
        <button operation>+</button>
        <button data ={1} onClick={appendValueHandler}>1</button>
        <button data ={2} onClick={appendValueHandler}>2</button>
        <button data ={3} onClick={appendValueHandler}>3</button>
        <button operation>-</button>
        <button data ={"."}onClick={appendValueHandler} decimal>.</button>
        <button data ={0} onClick={appendValueHandler}>0</button>
        <button gridSpan={2}>=</button>
   
    </Container>
      
    </>
  )
}

export default Calculator