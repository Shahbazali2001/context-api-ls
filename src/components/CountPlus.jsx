import React from 'react'
import { useContext } from 'react'
import Counter from '../contexts/Counter.jsx'

const CountPlus = () => {
  const {count, setCount} = useContext(Counter)
  return (
    <div className='flex justify-center items-center mt-4'>
        <button onClick={() => setCount(count + 1)} className='bg-blue-500 p-2 rounded-md'> Count +</button>
    </div>
  )
}

export default CountPlus