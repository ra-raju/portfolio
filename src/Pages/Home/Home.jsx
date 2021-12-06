import React from 'react';
import Typewriter from 'typewriter-effect';
import heroImg from '../../images/mybg.png';
import Navigation1 from '../Shared/Navigation1';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navigation1 />

      <section className="heroSection">
        <div className="img-section">
          <img className="heroImg" src={heroImg} alt="" />
        </div>

        <div className="home-content">
          <h1 className="home-heading ">
            I'M{' '}
            <span className="name">
              <Typewriter
                options={{
                  strings: ['ROBEYOUL AWAL RAJU', 'MERN DEVELOPER'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <div className="cv-container">
            <a href="https://drive.google.com/uc?export=download&id=1_bnYH2f9BZcg1WUBbtcwys8__gyVsWQx">
              <span className="cv-icon">
                <i className="fas fa-download"></i>
              </span>
              resume
            </a>
          </div>

          <p className="home-paragraph animate__animated animate__backInRight">
            {' '}
            I am a self taught MERN developer with a BBA degree (running) in
            Finance in University of Rajshahi. I've always found coding
            intuitive and have pushed myself to learn the most effective ways to
            achieve a result. <br /> <br />
            I'm a first learner and can quickly integrate into a team so i can
            provide value to the company and the customers.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
