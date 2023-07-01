/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './phonebook.css';
import InformationTable from './phonebook-Table';
import PhoneBookForm from './phonebook-form';

function Application(props) {
  const usersObj = [];

  const [users, setUsers] = useState(usersObj);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <body className="cBody">
      <div style={{ width: 'max-content', height: 'max-content' }} className="card">
        <section>
          <PhoneBookForm addUser={addUser} />
          <InformationTable users={users} />
        </section>
      </div>
    </body>
  );
}

export default Application;
