import React from 'react';

const Navbar = () => {
  return (
    <header className="logo">
      <div className="container">
        <h1>Movies<span>Today</span></h1>
        <nav>
          <ul className="nav__link--list">
            <li className="nav__link">
              <a href="https://www.omdbapi.com/" target="_blank" className="nav__link--anchor link__hover-effect">Api's Used</a>
            </li>
            <li className="nav__link">
              <a href="https://github.com/Cism0/Movie-API-Project" target="_blank" className="nav__link--anchor link__hover-effect">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
