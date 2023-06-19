// setup controlled input (name input)

// setup onSubmit (for now just placeholder)

// import data array (first array) from data

// create another state value (data as default)

// iterate over and display right after form (h4)

// when user submits the form add new person to the list

// Extra Challenge

// add button and setup functionality to remove user
import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if no value, do nothing
    if (!name) return;
    // if value, setup new user and add to current users
    const fakeId = Date.now();
    console.log(fakeId);
    console.log('form submitted');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>
      {/* The users.map function is used to perform operations on each element in an array users, */}
      {users.map((user) => {
        // the use of key={user.id} on elements in React components is used to give a unique identity to each element in the list (list).
        return (
          <div key={user.id}>
            {/* user.name = used to insert the value of the name property on the user object into the <h4> heading element. */}
            <h4>{user.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
