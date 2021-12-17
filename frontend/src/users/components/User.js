import React from 'react';

const User = ({user}) => {
  return (
    <li key={user.id} >
      <span className="user">{user.name}</span>
    </li>
  )
}

export default User;