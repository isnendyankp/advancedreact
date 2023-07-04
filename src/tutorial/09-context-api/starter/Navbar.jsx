import { useState } from 'react';
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
      <NavLinks user={user} logout={logout} />
    </nav>
  );
};
// pass prop down on user={user} logout={logout}
export default Navbar;
