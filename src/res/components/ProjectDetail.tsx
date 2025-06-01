import '../../styles/projects.css';

type ProjectDetailProps = {
    project: {
        title: string;
        technologies: string[];
        tools: string[];
        image: string;
        codeUrl: string;
        content?: string;
        images?: string[];
    };
    onBack: () => void;
}

function ProjectDetail({ project, onBack }: ProjectDetailProps) {
    return (
        <div className="project-detail-container">
            <button 
                onClick={onBack} 
                className="back-button"
            >
                &larr; Back to Projects
            </button>
            
            <h1 className="project-detail-title">{project.title}</h1>
            
            <div className="project-detail-content">
                <div className="project-detail-images">
                    <div className="main-image">
                        <img 
                            src={`../../src/assets/resources/${project.image}`} 
                            alt={project.title} 
                        />
                    </div>
                    
                    {project.images && project.images.length > 0 && (
                        <div className="additional-images">
                            {project.images.map((img, index) => (
                                <img 
                                    key={index}
                                    src={`../../src/assets/resources/${img}`} 
                                    alt={`${project.title} ${index + 1}`} 
                                />
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="project-detail-info">
                    <div className="project-tech">
                        <p>Technologies:</p>
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
                    
                    {project.content && (
                        <div className="project-markdown">
                            <h3>Projects Details</h3><br/>
                            {project.content.split('\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    )}
                    
                    <div className="project-detail-links">
                        <a
                            href={project.codeUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="code-btn"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;