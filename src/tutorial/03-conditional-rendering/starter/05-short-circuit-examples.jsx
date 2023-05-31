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
      {/*Ternary Operato*/}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      {/* inside element */}
      <button className="btn">{isEditing ? 'edit' : 'add'}</button>
      {/* toggle elements/components */}
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
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

// Ternary Operator
// In JavaScript, the ternary operator is a way to concisely express a simple conditional statement. It is often called the "conditional operator" or the "ternary conditional operator".
// Here is the basic syntax for using the ternary operator:
// condition ? expression1 : expression2;
// If condition is truthy, the operator will return expression1. If condition is falsy, it will return expression2.