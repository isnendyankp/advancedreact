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

  return (
    <div>
      {/* content inside element */}
      <h2>{text || 'default value'}</h2>
      {/* toggle element */}
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* toggle component */}
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Congratulation</h4>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;

// <h2>{name || 'default value'}</h2> display susan
// <h2>{text || 'default value'}</h2> display default value