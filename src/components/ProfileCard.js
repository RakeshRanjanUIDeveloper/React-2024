import React from 'react'

const ProfileCard = ({title, handle, description}) => {
  return (
    <div className='profile-card'>
        <div>{title}</div>
        <div>{handle}</div>
        <div>{description}</div>
    </div>
  )
}

export default ProfileCard