import React from 'react';
import Header from './NavigationHeader';
import Footer from './NavigationFooter';
import MyResume from '../Sarina-Colosimo-Resume2020.pdf';


const Resume = () => {
  return (
      <div class="resume-container">
        <Header />
        <div class="resume-title">View/Download My Resume</div>
        <section class="resume-section">
          <div class="resume"><iframe src={MyResume} height="1000" width="800"></iframe></div>
        </section>
        <Footer />
      </div>
  )
}


export default Resume;