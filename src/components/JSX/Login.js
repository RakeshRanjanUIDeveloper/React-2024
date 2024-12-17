import React, { useState } from 'react'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const toggleLogin = () => {
        setLoggedIn(!loggedIn); // Toggle the loggedIn state
    };
  return (
    <React.Fragment>
    <div>{loggedIn ? <h1>"Welcome back!" </h1> : <h1>"Please log in"</h1>}</div>
    <button onClick={toggleLogin}>
                {loggedIn ? "Log Out" : "Log In"}
            </button>
    </React.Fragment>

  )
}

export default Login