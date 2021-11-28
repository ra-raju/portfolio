import React from 'react';

const ProjectCard = ({ project }) => {
  const {
    name,
    img,
    client_side,
    server_side,
    Live_Preview,

    technologies,
  } = project;
  // console.log(technologies);

  technologies.map((tech) => console.log(tech));
  return (
    <div>
      <div className="project-card">
        <div className="project-card-image">
          <img src={img} alt={name} />
        </div>
        <div className="project-card-content">
          <h3 className="porject-name">{name}</h3>
          <div className="source-code">
            <div className="client-side">
              {' '}
              <a href={client_side} className="code-link">
                {' '}
                client side
              </a>
            </div>
            <div className="server-side">
              <a href={server_side} className="code-link">
                server code
              </a>
            </div>
          </div>
          <div className="technologies">
            {technologies.map((tech) => (
              <span key={tech} className="tech">
                {tech}
              </span>
            ))}
          </div>
          <div className="live-preview">
            <a href={Live_Preview}> Live Link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
