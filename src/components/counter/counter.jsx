/* eslint-disable react/button-has-type */
import { React, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleDouble = () => {
    setCount(count * 2);
  };

  return (
    <body className="cBody">
      <div className="card">
        <h1>
          {' '}
          {count}
          {' '}
        </h1>
        <div className="btn-group">
          <button className="button1" onClick={handleIncrement}> + </button>
          <button className="button3" onClick={handleDecrease}> - </button>
          <button className="button2" onClick={handleDouble}> Double </button>
        </div>
      </div>
    </body>
  );
}

export default Counter;
