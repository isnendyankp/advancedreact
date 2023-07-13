import React from 'react';
import { useState, useReducer } from 'react';
import { data } from '../../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';


// default state
const defaultState = {
  people: data,
  
};


const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
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
// 12. get 2 things on reducer function (state, action)
// 13. add action on clearlist with dispatch(action) & type CLEAR_LIST 
// 14. check action type call CLEAR_LIST on reducer function
// 15. return new value after check CLEAR_LIST
// 16. cr8 3 equal function with string: 'CLEAR_LIST', 'RESET_LIST', 'REMOVE_ITEM'
// 17. matching CLEAR_LIST on reducer function at check type with dispatch CLEAR_LIST(ReducerBasics) 
// 18. add dispatch RESET_LIST on ReducerBasics: dispatch({ type: RESET_LIST });
// 19. add RESET_LIST check type & returning value data on reducer
// 20. add dispatch for type REMOVE_ITEM on ReducerBasics
// 21. add other property = payload which is object & have value (id).
// 22. add REMOVE_ITEM check type on reducer
// 23. cr8 newPeople with filter for targeting person id = let newPeople = state.people.filter((person) => person.id !== action.payload.id);
// 24. add return REMOVE_ITEM & make property people change the value to newPeople
// 25. defines an error being thrown with a specific error message.
// 26. import all actions code from actions file
// 27. relocate reducer code with export & import