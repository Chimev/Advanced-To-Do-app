import React from 'react'
import './Navbar.css'

const Navbar = ({text, log, name}) => {
  return (
    <nav>
        <div>
            <h2></h2>
        </div>
        <div className="button">
        <button onClick={log}>{text}</button>
        </div>
    </nav>
  )
}

export default Navbar