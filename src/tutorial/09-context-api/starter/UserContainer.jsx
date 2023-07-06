// import { useContext } from 'react';
// import { NavbarContext } from './Navbar';

const UserContainer = () => {
// by pass context API between Navbar and User Container
// by pass with no getting any props on Navlinks
const { user, logout } = useContext(NavbarContext)

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