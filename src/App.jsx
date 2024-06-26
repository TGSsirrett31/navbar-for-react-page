import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from 'navbar-for-react'
import HomePage from './components/homePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar 
      logo="React Navbar"
      link1="Home"
      link2="About"
      link3="Support"
      textColor="#fff"
      backgroundColor="#000"
    />
    <HomePage />
    </>
  )
}

export default App
