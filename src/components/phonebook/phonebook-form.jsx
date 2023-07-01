/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './phonebook.css';

function PhoneBookForm(props) {
  const initContact = {
    id: null,
    userFirstname: 'Caelyb',
    userLastname: 'Lockett',
    userPhone: '07710811644',
  };

  const [userState, setUserState] = useState(initContact);

  const handleUserChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
    props.addUser(userState);
    setUserState(initContact);
  };

  return (
    <form onSubmit={handleSubmit} className="form.container">
      <label>First name:</label>
      <br />
      <input className="form.inputs" name="userFirstname" type="text" value={userState.userFirstname} onChange={handleUserChange} />
      <br />
      <label>Last name:</label>
      <br />
      <input className="form.inputs" name="userLastname" type="text" value={userState.userLastname} onChange={handleUserChange} />
      <br />
      <label>Phone:</label>
      <br />
      <input className="form.inputs" name="userPhone" type="text" value={userState.userPhone} onChange={handleUserChange} />
      <br />
      <input className="form.submitBtn" type="submit" value="Add User" />
    </form>
  );
}

export default PhoneBookForm;
