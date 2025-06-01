import { useState, useEffect } from "react"
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import '../styles/App.css'

type Page = ('Home' | 'About' | 'Projects' | 'Contact')

function App() {
  const [page, setPage] = useState<Page>('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectPage = (page: Page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-container">
      <Header onNavigate={selectPage} scrolled={scrolled} currentPage={page} />
      <main className={`content ${page.toLowerCase()}-page`}>
        {page === 'Home' && <Home onNavigate={selectPage} />}
        {page === 'About' && <About />}
        {page === 'Projects' && <Projects />}
        {page === 'Contact' && <Contact />}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} - Todos los derechos reservados
      </footer>
    </div>
  )
}

export default App