import React, { useContext } from 'react'
import './todo.css'
import AddTask from '../Components/AddTask/AddTask'
import Display from '../Components/Display/Display'
import DisplayContext from '../Context/context'
import Navbar from '../Components/Navbar/Navbar'

const Todo = () => {
const {display} = useContext(DisplayContext)
  
  return (
    <>
    <div className="container">
      <div className="todo-app">
        <Navbar/>
        <h2>To-Do List</h2>
        <h4>{display.length} Todos</h4>

        <AddTask/>
        <Display/>
      </div>
        
    </div>
    

    </>

  )
}

export default Todo