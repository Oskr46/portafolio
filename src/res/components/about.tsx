import { useState } from 'react';
import '../../styles/about.css';
import About_Eng from '../languages/eng/about_eng';
import About_Esp from '../languages/esp/about_esp';
import logo from '../../assets/logo.png';

function About() {
    const [activeLang, setActiveLang] = useState('');

    return (
        <div className="about-container">
            <div className="about-header">
                <img className='logo' src={logo} alt="Logo" />
                <h2>About Me</h2>
                <p className="language-prompt">Select a language to see the info</p>
                
                <div className='language-buttons'>
                    <button 
                        className={`lang-btn ${activeLang === 'esp' ? 'active' : ''}`} 
                        onClick={() => setActiveLang('esp')}
                    >
                        Español
                    </button>
                    <button 
                        className={`lang-btn ${activeLang === 'eng' ? 'active' : ''}`} 
                        onClick={() => setActiveLang('eng')}
                    >
                        English
                    </button>
                </div>
            </div>

            <div className="about-content">
                {activeLang === 'esp' && <About_Esp />}
                {activeLang === 'eng' && <About_Eng />}
            </div>
        </div>
    )
}

export default About;