import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const refresh = () => setCount(0);

  return (
    <div >
      <h1>My Count: {count}</h1>

      <button onClick={increment}>+ Increase</button>
      <button onClick={decrement}>- Decrease</button>
      <br></br>
      <br></br>
      <button onClick={refresh}>refresh</button>
    </div>
  );
}

export default Counter;
