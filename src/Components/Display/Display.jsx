import React, { useContext } from 'react'
import displayContext from '../../Context/context'
import Button from '../Button/Button'
import './display.css'


const Display = () => {
    const {display, setDisplay} = useContext(displayContext)

    const handleDelete = (id) => {
        const newDisplay = display.filter((item,index) => {
          return index !== id;
        })
        setDisplay(newDisplay)
      }

    
  return (
    <div>{display.map((todo, index) => {
        return <>
        <div className="list">
            <h3 key={index}>{todo}</h3>
            <Button text={'Delete'} logic={() => handleDelete(index)}/>
        </div>
        </>
    })}</div>
  )
}

export default Display