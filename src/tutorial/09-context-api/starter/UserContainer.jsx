import React from 'react'

const UserContainer = ({user, logout}) => {
  return (
    <div className="user-container">
      <p>Hello There, {user.name}</p>
      
      <button className="btn" onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default UserContainer