function About_Eng() {
    const technologies = [
        { icon: "php_icon.png", name: "PHP + CSS + HTML" },
        { icon: "c++_icon.png", name: "C++" },
        { icon: "physics_icon.png", name: "JavaScript (React + Vite)" },
        { icon: "wordpress_icon.png", name: "CMS WordPress" },
        { icon: "python_icon.png", name: "Python" },
        { icon: "dart_icon.png", name: "Dart" },
        { icon: "visual-basic_icon.png", name: "Visual Basic" },
        { icon: "pascal_icon.png", name: "Pascal" }
    ];

    const tools = [
        { icon: "git_icon.png", name: "Git" },
        { icon: "github_icon_bg.png", name: "GitHub" },
        { icon: "trello_icon_bg.png", name: "Trello" },
        { icon: "figma_icon.png", name: "Figma" }
    ];

    return (
        <div className='about-me-card'>
            <div className="profile-section">
                <div className="profile-image">
                    <img src="../../src/assets/me.jpg" alt="Oscar Rojas" />
                </div>
                <div className="profile-info">
                    <h3>Data about me</h3>
                    <p>
                        My name is Oscar Rojas. I'm 20 years old and from Venezuela. I'm currently studying 
                        Computer Engineering at Gran Mariscal de Ayacucho University, where I'm in my 7th semester.
                    </p>
                    <p>
                        Throughout my academic journey, I've worked on various projects for university assignments.
                        This portfolio serves as a way to showcase those projects and preserve them as evidence
                        of my growth and skills throughout my professional career.
                    </p>
                </div>
            </div>

            <div className="tech-section">
                <h3>Programming Environment</h3>
                <p>
                    I have worked with multiple programming languages and environments, including:
                </p>
                
                <div className="tech-list">
                    {technologies.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <img 
                                src={`../src/assets/icons/${tech.icon}`} 
                                alt={tech.name} 
                            />
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>

                <p>
                    Additionally, I have experience with SQL and knowledge in designing relational databases,
                    including creating and managing tables with proper relationships in PostgreSQL and MySQL.
                </p>

                <h3>Development Tools</h3>
                <p>
                    Which are crucial tools for teamwork when carrying out a project:
                </p>
                
                <div className="tech-list">
                    {tools.map((tool, index) => (
                        <div key={index} className="tech-item">
                            <img 
                                src={`../src/assets/icons/${tool.icon}`} 
                                alt={tool.name} 
                            />
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About_Eng;