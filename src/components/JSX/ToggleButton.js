import React, { useState } from 'react'

const ToggleButton = () => {
    const [onstate, setOnState] = useState("ON")

    const toggleButton = () =>{
        setOnState((prev) => (prev === 'ON' ? "OFF" : "ON"))
    }
  return (
    <div>
        <h1>Your room light is {onstate}</h1>
        <button onClick={toggleButton}>ToggleButton</button>
    </div>
  )
}

export default ToggleButton