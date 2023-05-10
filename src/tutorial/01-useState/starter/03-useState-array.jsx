import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

const removeItem = () =>{}
const clearAllItems = () =>{
  setPeople([]);
};

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button">remove</button>
          </div>
        );
      })}
      <button type="button" style={{ marginTop: '2rem'}} className="btn" onClick={clearAllItems}>
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
