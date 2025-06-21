import { useState } from 'react'
import './App.css'
import GeminiChat from './component/GiminiChat'
import Sidebar from './component/Sidebar'
import Nav from './component/Nav'

function App() {
  const [count, setCount] = useState(0)
  const apikey = "AIzaSyCUt2ifR5ww1tMt3KyW6fKZgWeNGn--pjI"

  return (
    <div className="flex h-screen">
      <Nav/>
      <Sidebar />
      <GeminiChat />
      

    </div>
  )
}

export default App
