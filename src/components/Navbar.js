import React from 'react';

const Navbar = () => {
  return (
    <div className="logo">
      <div className="container">
        <p>Movies<span>Today</span></p>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a href="#" className="nav__link--anchor link__hover-effect">Movies</a>
          </li>
          <li className="nav__link">
            <a href="https://github.com/Cism0/Movie-API-Project" target="_blank" className="nav__link--anchor link__hover-effect">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;