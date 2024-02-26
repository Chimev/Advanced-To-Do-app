import { useState } from "react"
import DisplayContext from "./context"


const DisplayProvider = ({children}) => {
    const [task, setTask] = useState([])
    const [complete, setComplete] = useState([])
    const [history, setHistory] = useState([])
    const [user, setUser] = useState(null)
    const value = {
        task,
        setTask,
        complete, 
        setComplete,
        history,
        setHistory, 
        user,
        setUser
    }

    return (
        <DisplayContext.Provider value={value}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayProvider