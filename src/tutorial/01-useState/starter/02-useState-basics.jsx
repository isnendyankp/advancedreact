import { useState } from "react";


const UseStateBasics = () => {
  const value = useState('hello')[0];
  const func =  useState('hello')[1];
  console.log(value);
  console.log(func);

  return <h2>useState basics</h2>;
};

export default UseStateBasics;
