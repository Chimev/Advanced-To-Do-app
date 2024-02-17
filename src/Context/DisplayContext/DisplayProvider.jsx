import { useState } from "react"
import DisplayContext from "./context"


const DisplayProvider = ({children}) => {
    const [task, setTask] = useState([])
    const [complete, setComplete] = useState([])
    const [history, setHistory] = useState([])
    const value = {
        task,
        setTask,
        complete, 
        setComplete,
        history,
        setHistory
    }

    return (
        <DisplayContext.Provider value={value}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayProvider