import React from 'react'

const Image = ({src}) => {
  return (
    <div>
        <img src={src} style={{width:'200px', display:'block'}} />
    </div>
  )
}

export default Image