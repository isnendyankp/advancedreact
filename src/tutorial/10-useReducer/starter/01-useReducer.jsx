import React from 'react';
import { useState, useReducer } from 'react';
import { data } from '../../../data';

// default state
const defaultState = {
  people: data,
  
};

// reducer function
const reducer = () =>{

}

const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
  };

  const resetList = () => {
    // setPeople(data);
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
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
// 5. pass in with create useReducer for calling default state & reducer to manipulate state
// 6. cr8 base reducer function
// 7. cr8 base default state
// 8. in state were getting back state value & function but in reducer were getting back state & dispatch
// 9. const [people, setPeople] = useState(data); = getting back people: state value, setPeople: function
// 10. const [state, dispatch] = useReducer(reducer, defaultState); = getting back state & dispatch
// 11. remove getting back state but add access state on div {state.people.map((person) => {const { id, name } = person;