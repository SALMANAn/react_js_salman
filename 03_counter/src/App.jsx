import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(1)
  //let counter=15
  const addValue=() =>{
    if (counter !=0) {
      setcounter(counter+-1)
    
    }
    
   //counter=counter +1
   //setcounter(counter+1)
  }
  const removeValue=()=>{
    setcounter(counter-1)
  }
  const Facebook=()=>{
    setcounter(counter+1)
  }


  return (
    <>
       <h1>Salman website</h1>
       <h2>Counter Value:{counter} </h2>
       <button onClick={addValue}>Add Value{counter}</button>
       <br/>
       <button onClick={removeValue}>Remove Value{counter}</button>
       <p>footer:{counter}</p>
       <button onClick={Facebook}>Message{counter}</button>

    </>
  )
}

export default App
