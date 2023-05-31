import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbarContainer'>

            <div className='title'>
                <h1 className='initials'>ER</h1>
            </div>

            <div className='navbarItems'>
                <h2>About</h2>
                <h2>Services</h2>
                <h2>Contact</h2>
            </div>
    </div>
  )
}

export default Navbar