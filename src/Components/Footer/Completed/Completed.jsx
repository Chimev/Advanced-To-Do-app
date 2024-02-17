import React, { useContext } from 'react'
import DisplayContext from '../../../Context/DisplayContext/context'

const Completed = () => {
const {complete} = useContext(DisplayContext)

  return (
    <div className="todo-app">
        <h2>Completed</h2>
        <h4>{complete.length} Completed</h4>
        <div>
          {complete.map((item, index) => {
            return <>
            <div className="list">
              <h3 key={index}>{item}</h3>
            </div>
            </>
          })}
        </div>
      </div>
  )
}

export default Completed