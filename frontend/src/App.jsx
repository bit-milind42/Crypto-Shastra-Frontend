import { useState } from 'react'
import './App.css'
import Navbar from './pages/navbar/Navbar'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home/>
    </>
  )
}

export default App
