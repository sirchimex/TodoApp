import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-indigo-100 px-8 min-h-screen'>
      <h1 className='text-5xl text-center'>Todo List</h1>
    </div>
  )
}

export default App
