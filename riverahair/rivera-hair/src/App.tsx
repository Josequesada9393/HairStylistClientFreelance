import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './scenes/Landing/Landing'
import Services from './scenes/ServicesProvided/Services'
import Breakpoint from './Components/breakpoint/Breakpoint'
import Contact from './scenes/Contact/Contact'
function App() {

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
