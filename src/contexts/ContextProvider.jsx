import React from 'react'
import { useState } from 'react'
import Counter from './Counter.jsx'

const ContextProvider = ({children}) => {

  const [count, setCount] = useState(0)

  return (
    <Counter.Provider value={{count, setCount}}>
      {children}
    </Counter.Provider>
  )
}

export default ContextProvider