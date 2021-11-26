// import { Grid } from '@mui/material';
import React from 'react';
import aboutImg from '../../images/about.JPG';
import './About.css';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const About = () => {
  return (
    <section className="about-section">
      <h1 className="main-heading">
        ABOUT <span className="name">ME</span>
      </h1>

      <div className="about">
        <div className="img-section">
          <img className="aboutImg" src={aboutImg} alt="" />
        </div>
        <div className="personal-info">
          <PersonalInfo />
        </div>
      </div>

      <div className="skills">
        <Skills />
      </div>
    </section>
  );
};

export default About;
