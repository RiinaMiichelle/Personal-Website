import React from 'react';
// import './App.css';
import Headshot from '../Headshot.jpg';
import { Link } from 'react-router-dom';

// class Navigation extends React.Component {
//   constructor() {
    
//   }
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }


function PersonalWebsite() {
  return (
    <div class="personal-website-container">
      <header class="header">
        <div class="outer-container">
          <div class="nav-container">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </header>

      <div class="content">
        <section class="title-section">
          <div className="title">Hello, my name is Sarina. I am a Front End Developer living in Austin, TX.</div>
        </section>
        <section class="image-section">
          <img class="image" src={Headshot} />
        </section>
        <section class="about-me">
          <div>About me</div>
        </section>
        <section class="my-skills">
          <div>My Skills</div>
          <div>Frontend: Javascript, React, React Native, Redux, Webpack,HTML5, JQuery</div>
          <div>Backend: Javascript, Node.js, Express.js, Docker, SQL, JSON</div>
          <div>Design: Data Structures, algorithms/complexity, object-oriented programming, responsive web design, MVC</div>
          <div>Other: Git, Agile/Scrum, UNIX Shell</div>
        </section>
      </div>

      <footer class="footer">
        <div>Copyright Sarina Colosimo 2020</div>
      </footer>
    </div>
  );
}

export default PersonalWebsite;
