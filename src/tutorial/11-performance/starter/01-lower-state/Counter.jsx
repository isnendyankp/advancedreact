import React from 'react'

const Counter = () => {
  return (
    <button
      className="btn"
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: '1rem' }}
    >
      count {count}
    </button>
  );
}

export default Counter