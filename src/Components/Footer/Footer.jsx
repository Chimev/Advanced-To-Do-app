import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <h4><Link to={'/completed'} style={{textDecoration:'none'}} >Completed</Link></h4>
    <h4><Link to={'/progress'} style={{textDecoration:'none'}} >Progress</Link></h4>
    <h4><Link to={'/history'} style={{textDecoration:'none'}} >History</Link></h4>
    </footer>
  )
}

export default Footer