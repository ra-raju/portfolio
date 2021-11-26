import { Grid } from '@mui/material';
import React from 'react';
import './About.css';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-heading">
        ABOUT <span className="name">ME</span>
      </h1>

      <div className="about">
        <div className="personal-info">
          <PersonalInfo />
        </div>
        <div className="skills">
          <Skills />
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item sm={12} md={6}></Grid>
        <Grid item sm={12} md={6}></Grid>
      </Grid>
    </section>
  );
};

export default About;
