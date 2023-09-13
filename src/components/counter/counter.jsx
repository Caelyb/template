/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
import { React, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';

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
  const handleReset = () => {
    setCount(count * 0);
  };

  return (
    <body className="Body">
      <div className="card1">
        <h3 style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
          {' '}
          Counter
          {' '}

        </h3>
        <div
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
          }}
        >
          <h1>
            {' '}
            {count}
            {' '}
          </h1>
        </div>
        <ButtonGroup>
          <button className="button3" onClick={handleDecrease}> - </button>
          &nbsp;
          <button className="button1" onClick={handleIncrement}> + </button>
          &nbsp;
        </ButtonGroup>
        <div>
          <ButtonGroup>
            <button className="button2" onClick={handleDouble}> Double </button>
          &nbsp;
            <button className="button2" onClick={handleReset}> Reset </button>
          </ButtonGroup>
        </div>
      </div>
    </body>
  );
}

export default Counter;
