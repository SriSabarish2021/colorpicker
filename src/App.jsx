import './App.css'
import Clrinp from './Clrinp';
import Color from './Color'
import Title from './title'
import { useState } from 'react';

function App() {
  const[color,setcolor]=useState('')
  function colordis(e){
      console.log(typeof(e));
      setcolor(e)
  }
  return (
    <>
      <Title></Title>
      <Color color={color}></Color>
      <Clrinp color={color}
      setcolor={setcolor}
      colordis={colordis}></Clrinp>
    </>
  )
}

export default App
