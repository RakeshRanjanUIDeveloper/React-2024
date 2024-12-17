import React, { useState } from 'react'

const UserDetails = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div>
        <label>user Name</label>
        <input type='text' value={userName} onChange={ (e) => setUserName(e.target.value)} />
        <h1>User Name is {userName}</h1>
        <label>password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <h1>Password is {password}</h1>
    </div>
  )
}

export default UserDetails