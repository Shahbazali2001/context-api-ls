import React from 'react'
import { useContext } from 'react'
import Counter from './contexts/Counter.jsx'






function App() {
  
  
  const CurrentCount = useContext(Counter)
  const {count} = CurrentCount;


  return (
    <div className="App">
      <h1 className='text-4xl font-bold text-center'>Context API  </h1>
      <h1 className='text-4xl font-bold text-center mt-4'>Count is : {count} </h1>


    </div>
  )

}

export default App