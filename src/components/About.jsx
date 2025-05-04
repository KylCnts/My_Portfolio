import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>WHO I AM ?</h1>
        <p>
        My name's Kyla Mae. I'm a web designer and developer based in Sariaya, PH.

During the day I'm a student and in the evening I work on freelance projects and utilize the time to built my own products. I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.
        </p>
      </div>
      <div className="about-photo">
        <img src="./assets/pogi.jpg" alt="Kyla Pogi 1" />
        <img src="./assets/pogi2.jpg" alt="Kyla Pogi 2" />
        <img src="./assets/pogi3.jpg" alt="Kyla Pogi 3" />
      </div>
    </div>
  );
};

export default About;