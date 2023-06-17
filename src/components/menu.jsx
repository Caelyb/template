/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <body className="cBody">
        <div className="card2">
          <h3 style={{ fontWeight: 'bold', color: 'black' }}>Main Menu</h3>

          <form>
            <button className="menuButton" type="submit" formAction="https://github.com/Caelyb/template">Github Repo</button>
                &nbsp;
            <button className="menuButton" type="submit" formAction="/ItemGrid"> Item Grid </button>
                &nbsp;
            <button className="menuButton" type="submit" formAction="/Phonebook"> Phonebook </button>
                &nbsp;
            <button className="menuButton" type="submit" formAction="/Counter"> Counter </button>
                &nbsp;
            <button className="menuButton" type="submit" formAction="/Component"> Component Template </button>
          </form>
        </div>

      </body>

    );
  }
}

export default Menu;
