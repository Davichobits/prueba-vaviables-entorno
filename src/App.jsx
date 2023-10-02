import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

console.log();

function App() {
  const [msg, setMsg] = useState('')

  const object = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": "demo@minimals.cc",
      "password": import.meta.env.VITE_SECRET_KEY
    })
  }

  useEffect(() => {
    fetch(`https://api-dev-minimal-v510.vercel.app/api/auth/login`, object)
      .then(response => response.json())
      .then(data => setMsg(data.user.displayName))
  }, []);

  return (
    <>
      <p>{msg}</p>
    </>
  )
}

export default App
