import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
    console.log("vlaue added",counter);
  }

  const RemoveValue = () => {
    // counter = counter + 1;
    setCounter(counter - 1)
    console.log("vlaue removed",counter);
  }


  return (
    <>
     <h1>hey what are you</h1>
     <h2>Counter value:{counter} </h2>

     <button
     onClick={addValue}>Add value</button>
     <br />
     <button onClick={RemoveValue} >Remove Button</button>
    </>
  )
}

export default App
