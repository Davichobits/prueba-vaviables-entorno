import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

console.log();

function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${import.meta.env.VITE_SECRET_KEY}/`)
      .then(response => response.json())
      .then(data => setMsg(data.name))
  }, []);

  return (
    <>
      <p>{msg}</p>
    </>
  )
}

export default App
