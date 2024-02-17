import React, { useContext } from 'react'
import displayContext from '../../Context/DisplayContext/context'
import Button from '../Button/Button'
import './display.css'


const Display = () => {
    const {task, setTask, complete, setComplete, history, setHistory} = useContext(displayContext)

    const handleDelete = (id) => {
        const deleteTask = task.filter((_, i) => {
          return i !== id;
        })
        const historyTask = task.filter( (_, i) => {
          return i === id
        } )
        setHistory( [historyTask, ...history] )
        setTask(deleteTask)
        
      }

      const handleComplete = (id) => {
        const completeTask = task.filter( (_, i) => {
          return i === id
        } )
        const deleteTask = task.filter((_, i) => {
          return i !== id;
        })
        setComplete( [completeTask, ...complete] )//so we pushed the new array collected and sent it to the empty array
        setTask(deleteTask)
      }
      
      

    
  return (
    <>
    <div>{task.map((todo, index) => {
        return <>
        <div className="list">
            <h3 key={index}>{todo}</h3>
            <div>
            <Button text={'Complete'} logic={() => handleComplete(index)}/>
            <Button text={'Delete'} logic={() => handleDelete(index)}/>
            </div>
        </div>
        </>
        
    })}</div>
    </>
    
    
  )
}

export default Display