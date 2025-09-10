import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username :"abhi",
    password : 123
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-2xl mb-4'>tailwind test</h1>
      <Card username="kabhi" buttontext="vist me vsdkd"/>
      <Card username="tabhi"/>
     
    </>
  )
}

export default App
