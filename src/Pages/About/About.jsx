// import { Grid } from '@mui/material';
import React from 'react';
import aboutImg from '../../images/about.JPG';
import Navigation1 from '../Shared/Navigation1';
import './About.css';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const About = () => {
  return (
    <>
      <Navigation1 />
      <section className="about-section">
        <h1 className="main-heading">
          ABOUT <span className="name">ME</span>
        </h1>

        <div className="about">
          <div className="img-section">
            <img className="aboutImg" src={aboutImg} alt="" />
            <div className="cv-container">
              <a href="https://drive.google.com/uc?export=download&id=1_bnYH2f9BZcg1WUBbtcwys8__gyVsWQx">
                <span className="cv-icon">
                  <i className="fas fa-download"></i>
                </span>
                resume
              </a>
            </div>
          </div>
          <div className="personal-info">
            <PersonalInfo />
          </div>
        </div>

        <div className="skills">
          <Skills />
        </div>
      </section>
    </>
  );
};

export default About;
