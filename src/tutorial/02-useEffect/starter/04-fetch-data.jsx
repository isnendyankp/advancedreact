import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('hello');
  }, []);

  return <h2>fetch data example</h2>;
};
export default FetchData;
