import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation1 from '../Shared/Navigation1';
import './Portfolio.css';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://frozen-retreat-32896.herokuapp.com/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        // console.log(data);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <Navigation1 />
      <div className="portfolio-container">
        <h1 className="main-heading">
          My <span className="name">PROJECTS</span>
        </h1>

        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
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
              <Grid item xs={4} sm={4} md={6} key={project._id}>
                <ProjectCard project={project} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Portfolio;
