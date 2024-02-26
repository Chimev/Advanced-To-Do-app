import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import DisplayContext from '../../Context/DisplayContext/context'
import Todo from '../User/Todo/Todo'

const Home = () => {
    const {user, setUser} = useContext(DisplayContext)

    const login = () => {
        setUser(true);
    }
  return (
    <>
    {user 
    ? 
    <Todo/>
    :
    <>
    <Navbar text={'Logout'} log={login} />
    <h1>Noble Howfa design na!!!!</h1>
    <h2>this is suppose to be home page like a mini write up maybe just center a text 'Advance todo app' then the button up would be an authentication for signup or login. that would then take them to the next page </h2>
    </>
    }
    
    
    </>
  )
}

export default Home