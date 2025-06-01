function About_Esp() {
    const tecnologias = [
        { icon: "php_icon.png", nombre: "PHP + CSS + HTML" },
        { icon: "c++_icon.png", nombre: "C++" },
        { icon: "physics_icon.png", nombre: "JavaScript (React + Vite)" },
        { icon: "wordpress_icon.png", nombre: "CMS WordPress" },
        { icon: "python_icon.png", nombre: "Python" },
        { icon: "dart_icon.png", nombre: "Dart" },
        { icon: "visual-basic_icon.png", nombre: "Visual Basic" },
        { icon: "pascal_icon.png", nombre: "Pascal" }
    ];

    const herramientas = [
        { icon: "git_icon.png", nombre: "Git" },
        { icon: "github_icon_bg.png", nombre: "GitHub" },
        { icon: "trello_icon_bg.png", nombre: "Trello" },
        { icon: "figma_icon.png", nombre: "Figma" }
    ];

    return (
        <div className='about-me-card'>
            <div className="profile-section">
                <div className="profile-image">
                    <img src="../src/assets/me.jpg" alt="Oscar Rojas" />
                </div>
                <div className="profile-info">
                    <h3>Datos sobre mí</h3>
                    <p>
                        Mi nombre es Oscar Rojas. Tengo 20 años y soy de Venezuela. Actualmente estoy estudiando 
                        Ingeniería en Informática en la Universidad Gran Mariscal de Ayacucho, donde curso mi 6to semestre.
                    </p>
                    <p>
                        A lo largo de mi trayectoria académica, he trabajado en diversos proyectos para asignaturas 
                        universitarias. Este portafolio sirve para mostrar esos proyectos y preservarlos como evidencia 
                        de mi crecimiento y habilidades a lo largo de mi carrera profesional.
                    </p>
                </div>
            </div>

            <div className="tech-section">
                <h3>Entornos de programación</h3>
                <p>
                    He trabajado con múltiples lenguajes de programación y entornos, algunos de ellos son:
                </p>
                
                <div className="tech-list">
                    {tecnologias.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <img 
                                src={`../src/assets/icons/${tech.icon}`} 
                                alt={tech.nombre} 
                            />
                            <span>{tech.nombre}</span>
                        </div>
                    ))}
                </div>

                <p>
                    Adicionalmente, tengo experiencia con SQL y conocimientos en diseño de bases de datos relacionales, 
                    incluyendo la creación y gestión de tablas con relaciones adecuadas en PostgreSQL y MySQL.
                </p>

                <h3>Herramientas de desarrollo</h3>
                <p>
                    Las cuales son herramientas cruciales para el trabajo en equipo a la hora de realizar algún proyecto:
                </p>
                
                <div className="tech-list">
                    {herramientas.map((tool, index) => (
                        <div key={index} className="tech-item">
                            <img 
                                src={`../src/assets/icons/${tool.icon}`} 
                                alt={tool.nombre} 
                            />
                            <span>{tool.nombre}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About_Esp;