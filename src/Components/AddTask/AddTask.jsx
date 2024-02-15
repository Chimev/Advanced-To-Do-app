import React, { useState, useContext } from 'react'
import Button from '../Button/Button'
import DisplayContext from '../../Context/context'




const AddTask = () => {
    const [value, setValue] = useState('')
    const{ display, setDisplay } = useContext(DisplayContext)

    const addItem = (value) => {
        // console.log(value)//value could have being anything it is the value props in input
        setDisplay([...display, value])
        setValue("")
      }
  return (
    <div className="row">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button logic={() => addItem(value)} text={'Add'}/>
        </div>
  )
}

export default AddTask