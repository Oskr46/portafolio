import logo from '../../assets/logo.png'
import '../../styles/home.css'

interface homeProp {
    onNavigate: (page: 'Home' | 'About' | 'Projects' | 'Contact') => void;   
}

function Home({ onNavigate }: homeProp) {
    return (
        <div className="home-container">
            <section className='hero-section'>
                <div className='hero-content'>
                    <img className="logo" src={logo} alt="Oscar Rojas Logo" />
                    <h1>Oscar Rojas</h1>
                    <h2>Computer Engineer</h2>
                    <p className="hero-description">Innovative solutions through code</p>
                    <button className='cta-button' onClick={() => onNavigate('Projects')}>
                        See my Projects
                        <span className="arrow">→</span>
                    </button>
                </div>
            </section>

            <section className='about-section'>
                <div className='about-card'>
                    <h2>A Bit About Me</h2>
                    <p>Hey! I'm Oscar Rojas, a Computer Engineering student at Gran Mariscal de Ayacucho University (UGMA) 
                        in Venezuela. I'm currently in my 6th semester, and this is my digital portfolio. Here, you'll find projects 
                        I've worked on—both for university assignments and independent side projects. Hope you like my work! :D
                    </p>
                </div>
                
                <div className='about-card'>
                    <h2>Un Poco Sobre Mi</h2>
                    <p>¡Hola! Soy Oscar Rojas, estudiante de Ingeniería en Informática en la Universidad Gran Mariscal de Ayacucho (UGMA) 
                        en Venezuela. Actualmente cursando mi 6to semestre. Este es mi portafolio digital donde encontrarás proyectos 
                        académicos y personales en los que he trabajado. ¡Espero que te guste mi trabajo! :D
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;