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

  const deleteHandler= () =>{
    setCurrent(String(current).slice(0,-1))
  }

  const allClickHandler = () =>{
    setCurrent("");
    setOperations("");
    setPrevious("");
  }

  const chooseOperationHandler = (el) =>{
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  }
  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevious("");
    setOperations("");
  };


  const compute = () =>{


  }
  return (
    <>
    <Container>
    
      <Screen>
        <Previous>{previous} {operations}</Previous>
        <Current>{current}</Current>
        </Screen>
        <button gridSpan={2} onClick={allClickHandler}>AC</button>
        <button onClick={deleteHandler}>DEL</button>
        <button  data={"÷"} onClick={chooseOperationHandler} operation>÷</button>
        <button  data ={7} onClick={appendValueHandler}>7</button>
        <button data ={8} onClick={appendValueHandler}>8</button>
        <button  data ={9} onClick={appendValueHandler}>9</button>
        <button data={"x"} onClick={chooseOperationHandler} operation>x</button>
        <button data ={4} onClick={appendValueHandler}>4</button>
        <button data ={5} onClick={appendValueHandler}>5</button>
        <button data ={6} onClick={appendValueHandler}>6</button>
        <button data={"+"} onClick={chooseOperationHandler} operation>+</button>
        <button data ={1} onClick={appendValueHandler}>1</button>
        <button data ={2} onClick={appendValueHandler}>2</button>
        <button data ={3} onClick={appendValueHandler}>3</button>
        <button data={"-"} onClick={chooseOperationHandler} operation>-</button>
        <button data ={"."}onClick={appendValueHandler} decimal>.</button>
        <button data ={0} onClick={appendValueHandler}>0</button>
        <button gridSpan={2} onClick={equalHandler}>=</button>
   
    </Container>
      
    </>
  )
}

export default Calculator