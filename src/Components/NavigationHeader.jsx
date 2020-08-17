import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header class="header">
      <div class="nav-container">
        <Link class="nav-content" to="/">Home</Link>
        <Link class="nav-content" to="/projects">Projects</Link>
      </div>
    </header>
  )
}


export default Header;