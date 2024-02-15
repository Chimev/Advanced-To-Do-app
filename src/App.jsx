import React from 'react'
import Todo from './Todo/Todo'
import DisplayProvider from './Context/DisplayProvider'


const App = () => {
  return (
    <DisplayProvider>
      <Todo/>
    </DisplayProvider>

    
  )
}

export default App