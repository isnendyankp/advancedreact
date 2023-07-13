import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';

// reducer function
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};



//  1. import all actions code for access on reducer
//  2. relocate reducer function code from userReducer.jsx to reducer.js