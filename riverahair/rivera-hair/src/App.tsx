import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './scenes/Landing/Landing'
import Services from './scenes/ServicesProvided/Services'
import Breakpoint from './Components/Navbar/breakpoint/Breakpoint'
import Contact from './scenes/Contact/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Landing></Landing>
    <Breakpoint></Breakpoint>
    <Services></Services>
    <Breakpoint></Breakpoint>
    <Contact></Contact>
    </>
  )
}

export default App
