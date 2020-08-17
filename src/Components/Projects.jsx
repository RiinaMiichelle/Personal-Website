import React from 'react';
import GradProjectVideo from '../Sarina_Colosimo_ACA_Grad_Project.mp4';
import ProjectImage from '../Happy-Paws.jpg';

function Projects() {
  return (
    <div class="projects-container">
      <section class="projects-title">
        Recent Projects: Samples of some of my work from the past year.
      </section>
      <section class="happy-paws">
        <div class="happy-paws-title">Happy Paws</div>
        <div class="project-about">I recently graduated from Austin Coding Academy.
          This is my Graduation Presentation explaining my Capstone Application  
          Happy Paws. It is an application that connects people with dogs in local shelters they can take out for an afternoon. 
        </div>
        <div class="project-container">
          <img class="project-image" alt="project-image" src={ProjectImage} />
          <div>
            <video class="grad-video" src={GradProjectVideo} type="video/mp4" width="320" height="240" controls>
            Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="view-project">You can view the hosted project <a href="https://happy-paws-ui.herokuapp.com/home">Here</a></div>
      </section>
    </div>
  )
}

export default Projects;