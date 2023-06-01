// create state value: *user - default value null
//create two functions

/*-login - set's user equal to object with name property
  -logout - set's user equal to null*/
// in jsx use ? to display two different setups

// h4 with "hello there, user name" and logout button

// h4 with "please login " and login button
import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

    const login = () => {
      // normally connect to db or api
      setUser({ name: 'vegan food truck' });
    };
    const logout = () => {
      setUser(null);
    };

  return <h2>user challenge</h2>;
};

export default UserChallenge;
