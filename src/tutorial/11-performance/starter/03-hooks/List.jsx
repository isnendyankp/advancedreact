import Item from './Person';
import { memo } from 'react';
const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};
export default memo(List);

// import memo & export default memo(list);
