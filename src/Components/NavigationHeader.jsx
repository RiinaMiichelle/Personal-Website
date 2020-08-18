import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header class="header">
      <div class="nav-container">
        <div class="nav-contact">
          <a href="https://www.linkedin.com/in/sarinamcolosimo/"><i class="fab fa-linkedin fa-2x"></i></a>
          <a href="https://github.com/RiinaMiichelle"><i class="fab fa-github fa-2x"></i></a>
          <a href="https://github.com/RiinaMiichelle"><i class="far fa-envelope fa-2x"></i></a>
        </div>
        <div class="nav-buttons">
          <Link class="nav-link"  to="/">Home</Link>
          <Link  class="nav-link" to="/resume">Resume</Link>
          <Link  class="nav-link" to="/projects">Projects</Link>
        </div>
      </div>
    </header>
  )
}


export default Header;