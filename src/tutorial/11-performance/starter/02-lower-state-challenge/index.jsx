import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  

  
  const addPerson = () => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
