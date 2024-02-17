import React, { useContext } from 'react'
import './todo.css'
import Progress from '../Components/Footer/Progress/Progress'
import Completed from '../Components/Footer/Completed/Completed'
import History from '../Components/Footer/History/History'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

const Todo = () => {
  
  return (
    <>
    <div className="container">
      <div className="app">
      <Navbar/>
      <Routes>
        <Route  path='/progress' element={<Progress/>}/>
        <Route path='/completed' element={<Completed/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      <Footer/>
      </div>
      
    </div>
    

    </>

  )
}

export default Todo