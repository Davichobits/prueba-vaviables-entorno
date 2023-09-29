import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

console.log();

function App() {
  const [key, setkey] = useState(import.meta.env.VITE_SECRET_KEY)

  return (
    <>
      <p>La clave secreta es: {key}</p>
        
    </>
  )
}

export default App
