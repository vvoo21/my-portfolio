import projectsData from "../data/projectsData";

const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <img src={project.image} alt={project.title} style={{width: '100%', height: '100%'}} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              <strong>Technologies used:</strong>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
