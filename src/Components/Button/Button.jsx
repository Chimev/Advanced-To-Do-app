import React from 'react'

const Button = ({text, logic}) => {
  return (
   <>
   <button onClick={logic}>{text}</button>
   </>
  )
}

export default Button