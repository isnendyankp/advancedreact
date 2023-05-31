import { useState } from 'react';
/* 
-create state value (boolean)
-return a button and a component/element
-when user clicks the button:
*toggle state value
*conditionally render component/element*/

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      <button className="btn">toogle</button>
    </div>
  );
};

export default ToggleChallenge;
