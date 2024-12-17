import React from 'react'

const Button = ({label}) => {
  const handleAlert = () =>{
    alert("alert")
  }
  return (
    <React.Fragment>
    <button>{label}</button>
    <button onClick={handleAlert}>click for alert</button>
    </React.Fragment>
  )
}

export default Button