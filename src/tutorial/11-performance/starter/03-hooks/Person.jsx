const Person = ({ name, id, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
export default Person;

// add two new parameter : id, removePerson
// add button with onclick for pass parameter: removePerson(id)