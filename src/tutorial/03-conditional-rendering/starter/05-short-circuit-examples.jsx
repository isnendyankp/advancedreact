import { useState } from 'react';


// The ! operator is a logical operator in JavaScript that negates a boolean value. 
// It is equivalent to the not operator in other programming languages.
// for examples:
/*let isTrue = true;
  let isFalse = false;

console.log(!isTrue); // outputs: false
console.log(!isFalse); // outputs: true*/

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return <h2>short circuit - examples</h2>;
};

export default ShortCircuitExamples;
