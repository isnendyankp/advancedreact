import React from 'react'

const UserContainer = () => {
  return 'hello world';
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}
// if user null, in UserContainer display please login

export default UserContainer