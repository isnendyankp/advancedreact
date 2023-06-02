// Will Cover After 03-conditional-rendering

// Setup Challenge :

// create state value

// in jsx return button which toggles state value

// based on condition return second component (simple return)

// inside second component create useEffect and run it only on initial render

import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval');
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);

  return <h1>hello there</h1>;
};
export default CleanupFunction;
