import React from 'react';

function Menu() {
  return (
    <body className="cBody">
      <div className="card2">
        <h3 style={{ fontWeight: 'bold', color: 'black' }}>Main Menu</h3>

        <form>
          <button className="menuButton" type="submit" formAction="https://github.com/Caelyb/Template-React-App">Github Repo</button>
              &nbsp;
          <button className="menuButton" type="submit" formAction="/SecondPage"> Second Page </button>
              &nbsp;
          <button className="menuButton" type="submit" formAction="/ItemGrid"> thing </button>
        </form>
      </div>

    </body>

  );
}

export default Menu;
