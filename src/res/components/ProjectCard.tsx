import '../../styles/projects.css';

type ProjectCardProps = {
    project: {
        title: string;
        description: string;
        technologies: string[];
        tools: string[];
        image: string;
        codeUrl: string;
    };
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className='project-card'>
            <div className="project-image">
                <img 
                    src={`../../src/assets/resources/${project.image}`} 
                    alt={`${project.title} screenshot`} 
                />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                    <p>Technologies</p>
                    {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                <div className="project-tools">
                    <p>Work Tools</p>
                    {project.tools.map((tools, index) => (
                        <span key={index}>{tools}</span>
                    ))}
                </div>
                
                <div className="project-links">
                    <a 
                        href={project.codeUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="code-btn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;