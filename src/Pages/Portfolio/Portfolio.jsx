import { Grid } from '@mui/material';
import React from 'react';
import './Portfolio.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    name: 'Project 1',
    img: 'https://i.ibb.co/6r25Yxq/noagoan.jpg',
    client_side: 'www.goodle.com',
    server_side: 'www.google.com',
    Live_Preview: 'www.google.com',
    technologies: ['React', 'Redux', 'Express', 'MongoDB'],
  },
  {
    name: 'Project 2',
    img: 'https://i.ibb.co/6r25Yxq/noagoan.jpg',
    client_side: 'www.goodle.com',
    server_side: 'www.google.com',
    Live_Preview: 'www.google.com',
    technologies: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
  },
  {
    name: 'Project 3',
    img: 'https://i.ibb.co/6r25Yxq/noagoan.jpg',
    client_side: 'www.goodle.com',
    server_side: 'www.google.com',
    Live_Preview: 'www.google.com',
    technologies: ['React', 'Redux', 'Node'],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="main-heading">
        My <span className="name">PROJECTS</span>
      </h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ textalign: 'center' }}
      >
        {projects
          .slice(0)
          .reverse()
          .map((project) => (
            <Grid item xs={4} sm={4} md={6} key={project.name}>
              <ProjectCard project={project} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
