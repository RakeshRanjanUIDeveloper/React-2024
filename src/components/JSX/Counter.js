import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCount = () =>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleCount}>Click</button>
    </div>
  )
}

export default Counter