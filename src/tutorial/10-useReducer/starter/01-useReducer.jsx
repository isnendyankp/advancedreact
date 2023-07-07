import React from 'react';
import { data } from '../../../data';
const ReducerBasics = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = () => {
    setPeople([]);
  };
  // add reset functionality
  // create function that set's people back to data array
  const resetList = () => {
    setPeople(data);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;

// Challenge step info:
// 1. let's add reset functionality
// 2. create function that set's people back to data array
// 3. create another button, similar to clear just for reset
// 4. use conditional rendering to toggle between the buttons, depending on people value