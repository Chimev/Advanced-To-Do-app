import React, { useContext } from 'react'
import AddTask from '../../AddTask/AddTask'
import Display from '../../Display/Display'
import DisplayContext from '../../../Context/DisplayContext/context'

const Progress = () => {
  const {task} = useContext(DisplayContext)
  return (
    <div className="todo-app">
        <h2>To-Do List</h2>
        <h4>{task.length} Todos</h4>
        <AddTask/>
        <Display/>
        
      </div>
  )
}

export default Progress