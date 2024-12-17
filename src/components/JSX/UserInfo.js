import React from 'react'

const UserInfo = ({name, email}) => {
  return (
    <div>
        <h1>My name is {name} and my email id is {email}</h1>
    </div>
  )
}

export default UserInfo