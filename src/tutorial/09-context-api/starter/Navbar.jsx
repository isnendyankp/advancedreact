import React from 'react'
import NavLinks from './NavLinks';

const Navbar = () => {
  // create useState with object name is bob
  const [user, setUser] = useState({ name: 'bob' });
  // cr8 function log out
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks />
    </nav>
  );
}

export default Navbar