import React from 'react';
// import './App.css';
import Headshot from '../Headshot.jpg';
import Header from './NavigationHeader';
import Footer from './NavigationFooter';



function PersonalWebsite() {
  return (
    <div class="personal-website-container">
      <Header/>
      <div class="content">
        <section class="title-section">
          <div className="title">Hello, my name is Sarina. I am a Front End Developer living in Austin, TX.</div>
        </section>
        <section class="image-section">
          <img class="headshot" alt="my-headshot" src={Headshot} />
        </section>
        <section>
          <div class="about-me-title">A little about me</div>
          <div class="about-me-text">Photographer turned Fullstack-Bootcamp Grad. Currently I learn towards front-end developement.
            I enjoy designing user interfaces.  </div>
        </section>
        <img alt="my-aca-certificate" class="aca-certificate"  src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/21669789"></img>
        <div class="my-skills-title">My Skills</div>
        <div class="my-skills">
          <div class="skills-content">Frontend: Javascript, React, React Native, Redux, Webpack,HTML5, JQuery</div>
          <div class="skills-content">Backend: Javascript, Node.js, Express.js, Docker, SQL, JSON</div>
          <div class="skills-content">Design: Data Structures, algorithms/complexity, object-oriented programming, responsive web design, MVC</div>
          <div class="skills-content">Other: Git, Agile/Scrum, UNIX Shell</div>
        </div>
        <section>
          <div class="contact-me-title">Contact me</div>
            <div class="contact-icons">
              <a href="https://www.linkedin.com/in/sarinamcolosimo/"><i class="fab fa-linkedin fa-3x"></i></a>
              <a href="https://github.com/RiinaMiichelle"><i class="fab fa-github fa-3x"></i></a>
            </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalWebsite;
