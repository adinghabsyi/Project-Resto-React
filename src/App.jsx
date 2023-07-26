import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ActionAreaCard from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard />
      <ActionAreaCard />
    </>
  )
}

export default App
