import React from 'react'

const ArrayOfString = () => {
    const animals = ['cat', 'dog', 'rat', 'elephant']
  return (
    <div>
        {
            animals.map((a) => <li>{a}</li>)
        }
    </div>
  )
}

export default ArrayOfString