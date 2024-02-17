import React from 'react'
import Todo from './Todo/Todo'
import DisplayProvider from './Context/DisplayContext/DisplayProvider'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <DisplayProvider>
      <Todo />
    </DisplayProvider>
    </BrowserRouter>
    


  )
}

export default App