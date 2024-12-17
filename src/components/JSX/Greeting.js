import React from 'react'
import PropTypes, { number } from 'prop-types'
const Greeting = ({name, title, number}) => {
  return (
    <div>Hello {name} <br></br>
        {/* <h1>{title ? `${title}` : "Default Title" }</h1> */}
        {title}

        <h2>{number}</h2>
    </div>
  )
}

Greeting.defaultProps ={
    title:"Default Titles"
}

Greeting.propTypes ={
    number:PropTypes.number.isRequired
}

export default Greeting