import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("read books");
  return <h2>useState object example</h2>;
};

export default UseStateObject;
