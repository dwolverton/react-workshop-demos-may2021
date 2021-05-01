import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [ count, setCount ] = useState(5);

  function resetCount() {
    setCount(0);
  }
  function countUp() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>{count}</p>
      <p>
        <button type="button" onClick={() => setCount(prevCount => prevCount - 1)}>Down</button>
        <button type="button" onClick={resetCount}>Reset</button>
        <button type="button" onClick={countUp}>Up</button>
      </p>
    </div>
  );
}

export default Counter;