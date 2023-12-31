import projectsData from "../data/projectsData";
import '../styles/projects.css';

const Projects = () => {
  return (
    <div className="section">
      <h2 className="title">Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <div className="project" key={project.id}>
            <img className="img-project" src={project.image} alt={project.title} />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-links">
              <a href={project.demoLink} className="live-btn btns" target="_blank" rel="noopener noreferrer">Live preview</a>
              <a href={project.githubLink} className="github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
