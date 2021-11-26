import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const html = 95;
const css = 85;
const js = 70;
const react = 70;
const node = 50;
const Skills = () => {
  return (
    <div className="skill-container">
      <h3 className="secondary-heading">MY SKILLS</h3>
      <hr className="hr-row" />
      <div className="skills-list">
        <div className="skill">
          <CircularProgressbar
            value={html}
            text={`HTML`}
            styles={buildStyles({
              pathColor: 'gold',
              textColor: 'white',
              trailColor: 'rgb(20, 13, 50)',
            })}
          />
        </div>
        <div className="skill">
          <CircularProgressbar
            value={css}
            text={`CSS`}
            styles={buildStyles({
              pathColor: 'gold',
              textColor: 'white',
              trailColor: 'rgb(20, 13, 50)',
            })}
          />
        </div>
        <div className="skill">
          <CircularProgressbar
            value={js}
            text={`JS`}
            styles={buildStyles({
              pathColor: 'gold',
              textColor: 'white',
              trailColor: 'rgb(20, 13, 50)',
            })}
          />
        </div>
        <div className="skill">
          <CircularProgressbar
            value={react}
            text={`REACT`}
            styles={buildStyles({
              pathColor: 'gold',
              textColor: 'white',
              trailColor: 'rgb(20, 13, 50)',
            })}
          />
        </div>
        <div className="skill">
          <CircularProgressbar
            value={node}
            text={`NODE`}
            styles={buildStyles({
              pathColor: 'gold',
              textColor: 'white',
              trailColor: 'rgb(20, 13, 50)',
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
