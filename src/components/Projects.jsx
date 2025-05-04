import React from 'react';
import './Projects.css'; // Include the CSS file for styling

const Projects = () => {
  return (
    <div className="Projects-container">
      <h1>My Projects</h1>
      <h3>
        This is some of my projects:
      </h3>
      <div className="Projects-gallery">
        <img src="./assets/proj1.jpg" alt="Project 1" className="Projects-image" />
        <img src="./assets/proj2.jpg" alt="Project 2" className="Projects-image" />
        <p> You can check some of my project in my Github account below</p>
      </div>
    </div>
  );
};

export default Projects;