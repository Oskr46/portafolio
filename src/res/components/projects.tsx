import { useState } from "react";
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import '../../styles/projects.css';

type Project = {
    id: number;
    title: string; 
    description: string;
    technologies: string[];
    tools: string[];
    image: string;
    codeUrl: string;
    content?: string;
    images?: string[];
}


function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    const projects: Project[] = [
        { 
            id: 1,
            title: "Mochima.net", 
            description: "Página de promoción turística para el pueblo de Mochima.",
            technologies: ["WordPress"],
            tools: ["Figma", "Elementor (Plugin WordPress)"],
            image: "mochima-1.png",
            codeUrl: "http://mochima.net",
            content: `
                Desarrollo de una pagina web para la promocion turistica de Mochima,
                que cuenta con:
                - Acceso a las posadas y restaurantes registradas al instante
                - Informacion de contacto para restaurantes y posadas
                - Acceso a las noticias en tiempo real
                - Panel de administración
            `,
            images: ["mochima-1.png", "mochima-2.png","mochima-3.png"]
        },
        { 
            id: 2,
            title: "SIGMARKET", 
            description: "Proyecto de una Tienda Online SIGMARKET de venta de ropa.",
            technologies: ["PHP", "HTML","CSS"],
            tools: ["Figma", "Git", "GitHub", "Trello"],
            image: "sigmarket-1.png",
            codeUrl: "https:/github.com/oskr46/sigmarket",
            content: `Desarrollo de una tienda online "Sigmarket" que cuenta con las siguientes funcionalidades:
                - Registro de Usuarios e inicio de sesion.
                - Apartado de Visualizacion de todos los productos con filtros.
                - Busqueda de Productos.
                - Acceso al Carrito de cada Usuario.
                - Panel de Administracion
                -  Header Interactivo.
                
                Este Proyecto se realizó con ayuda de Git para manejo de versiones y compactar los cambios realizados por cada persona del grupo
            `,
            images: ["sigmarket-1.png", "sigmarket-2.png","sigmarket-3.png","sigmarket-4.png"]
        },
        { 
            id: 3,
            title: "LectroMart", 
            description: "Proyecto de una Tienda Online LectroMart de venta de productos electronicos.",
            technologies: ["React","node.js"],
            tools: ["React", "Vite", "Figma", "Git", "GitHub"],
            image: "lectromart-1.png",
            codeUrl: "https:/github.com/oskr46/tienda_online",
            content: `
                Desarrollo de una tienda online "LectroMart" que cuenta con las siguientes
                funcionalidades:
                - Inicio de sesion para los empleados registrados.
                - Apartado de Visualizacion de todos los productos.
                - Bandeja de Comentarios y Valoracion.
                - Panel de gestion para cada tipo de usuario (Gerente, Analista, Administrador).
                - Creacion de PDF con los Productos o Usuarios registrados.

                Este Proyecto se realizó con ayuda de Git para manejo de versiones
            `,
            images: ["lectromart-1.png", "lectromart-2.png","lectromart-3.png","lectromart-4.png","lectromart-5.png"]
        },
    ];

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackClick = () => {
        setSelectedProject(null);
    };

    if (selectedProject) {
        return <ProjectDetail project={selectedProject} onBack={handleBackClick} />;
    }

    return (    
        <>
            <div className="projects-title">
                <h2>My Projects</h2>
                <p>Here are some of the projects I've worked on throughout my career</p>
            </div>
            
            <div className="projects-container">
                <div className='projects-grid'>
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => handleProjectClick(project)}
                            className="project-card-wrapper"
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;