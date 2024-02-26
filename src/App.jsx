import React from 'react'
import DisplayProvider from './Context/DisplayContext/DisplayProvider'
import { BrowserRouter } from 'react-router-dom'
import Home from './Page/Home/Home'


const App = () => {
  return (
    <BrowserRouter>
    <DisplayProvider>
      <Home />
    </DisplayProvider>
    </BrowserRouter>
    


  )
}

export default App