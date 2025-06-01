import home from "../../assets/home_bttn.png";
import projects from "../../assets/dev_bttn.png";
import about from "../../assets/aboutme_bttn.png";
import contact from "../../assets/contact_bttn.png";

interface HeaderProps {
  onNavigate: (page: 'Home' | 'About' | 'Projects' | 'Contact') => void;
  scrolled: boolean;
  currentPage: 'Home' | 'About' | 'Projects' | 'Contact';
}

function Header({ onNavigate, scrolled, currentPage }: HeaderProps) {
  // Función para determinar si un botón está activo
  const isActive = (page: string) => currentPage === page ? 'active' : '';

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="buttons">
        <button 
          onClick={() => onNavigate('Home')} 
          className={`button ${isActive('Home')}`}
        >
          <img src={home} width={40} height={40} alt="Home" />
          <span>Home</span>
        </button>
        <button 
          onClick={() => onNavigate('About')} 
          className={`button ${isActive('About')}`}
        >
          <img src={about} width={40} height={40} alt="About Me" />
          <span>About Me</span>
        </button>
        <button 
          onClick={() => onNavigate('Projects')} 
          className={`button ${isActive('Projects')}`}
        >
          <img src={projects} width={30} height={30} alt="Projects" />
          <span>Projects</span>
        </button>
        <button 
          onClick={() => onNavigate('Contact')} 
          className={`button ${isActive('Contact')}`}
        >
          <img src={contact} width={40} height={40} alt="Contact" />
          <span>Contact</span>
        </button>
      </div>
    </header>
  );
}

export default Header;