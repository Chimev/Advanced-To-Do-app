import React, { useContext } from 'react'
import DisplayContext from '../../../Context/DisplayContext/context'

const History = () => {
const {history} = useContext(DisplayContext)

  return (
    <div className="todo-app">
        <h2>History</h2>
        <h4>{history.length} History</h4>
        <div>
          {history.map((item, index) => {
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

export default History