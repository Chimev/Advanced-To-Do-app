import { useState } from "react"
import DisplayContext from "./context"


const DisplayProvider = ({children}) => {
    const [display, setDisplay] = useState([])
    const value = {
        display,
        setDisplay
    }

    return (
        <DisplayContext.Provider value={value}>
            {children}
        </DisplayContext.Provider>
    )
}

export default DisplayProvider