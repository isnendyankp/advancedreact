import { useState } from 'react';
/* 
-create state value (boolean)
-return a button and a component/element
-when user clicks the button:
*toggle state value
*conditionally render component/element*/

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

//   const toggleAlert = () => {
//     if (showAlert) {
//       setShowAlert(false);
//       return;
//     }
//     setShowAlert(true);
//   };
// if true alert will be show at display & if false alert will be hiding
  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle alert
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;


