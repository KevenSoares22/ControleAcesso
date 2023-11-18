import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageStructure from './pages/PageStructure/PageStructure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageStructure/>
    </>
  )
}

export default App
