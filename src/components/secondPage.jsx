import React from 'react';

const item = {
  object: 'Example',
  Property1: true,
  Property2: 7.5,
  Property3: null,
  Property4: [true, true, true, false, true],
};

function SecondPage() {
  return (
    <body className="cBody">
      <div className="card3">
        <h1 style={{ fontWeight: 'bold', color: 'black' }}> Second page </h1>
        <h2>
          {' '}
          Object:
          {item.object}
        </h2>
        <br />
        <p>
          Property1:
          {item.Property2}
        </p>
        <br />
        <p>
          Property2:
          {item.Property3}
        </p>
        <br />
        <p>
          Property3:
          {item.Property4}
        </p>
      </div>
    </body>
  );
}

export { SecondPage, item };
