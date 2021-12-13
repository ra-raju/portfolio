import React from 'react';

const ProjectCard = ({ project }) => {
  const { projectName, img, clientLink, serverLink, liveLink, technologies } =
    project;
  const technology = technologies.split(',');

  return (
    <div>
      <div className="project-card">
        <div className="project-card-image">
          <img src={`data:image/*;base64, ${img}`} alt={projectName} />
        </div>
        <div className="project-card-content">
          <h3 className="project-name">{projectName}</h3>
          <div className="source-code">
            <div className="client-side">
              {' '}
              <a
                target="_blank"
                rel="noreferrer"
                href={clientLink}
                className="code-link"
              >
                <span className="card-icon">
                  <i className="fas fa-code"></i>
                </span>
                client side
              </a>
            </div>
            {serverLink && (
              <div className="server-side">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={serverLink}
                  className="code-link"
                >
                  <span className="card-icon">
                    <i className="fas fa-code"></i>
                  </span>
                  server code
                </a>
              </div>
            )}
          </div>
          <div className="technologies">
            {technology.map((tech) => (
              <span key={tech} className="tech">
                {tech.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="live-preview">
            <a target="_blank" rel="noreferrer" href={liveLink}>
              <span className="card-icon-live">
                <i className="fas fa-globe"></i>
              </span>
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
