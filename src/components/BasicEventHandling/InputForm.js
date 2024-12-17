import React from 'react'
import { useState } from 'react'
const InputForm = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
       console.log(text)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>
            <button type='submit'>Submit</button>
        </form>
    
    </div>
  )
}

export default InputForm