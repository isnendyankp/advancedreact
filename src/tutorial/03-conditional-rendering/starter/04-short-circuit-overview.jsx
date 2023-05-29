import { useState } from 'react';

/*Setup Challenge :

create two state values
one "falsy" and second "truthy"
setup both conditions for each operator in JSX - hint {}
|| OR
&& AND*/

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  return <h2>short circuit overview</h2>;
};
export default ShortCircuitOverview;
