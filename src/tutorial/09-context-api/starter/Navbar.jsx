import { useState, createContext } from 'react';
import NavLinks from './NavLinks';
import { useContext } from 'react';

export const NavbarContext = createContext();

// custom hook
// invoke this useContext once & provide the NavbarContext
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  // create useState with object name is bob
  const [user, setUser] = useState({ name: 'bob' });
  // cr8 function log out
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;

// pass prop down on user={user} logout={logout}
// <NavbarContext.Provider value={{ user, logout }}> : 
// Provider = property for createContext