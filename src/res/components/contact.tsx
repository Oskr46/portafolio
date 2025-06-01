import React from 'react';
import '../../styles/contact.css';

function Contact() {
    const contacts = [
        { icon: "linkedin_icon_bg.png", text: "See my Profile", url: "" },
        { icon: "whatsapp_icon_bg.png", text: "Text me", url: "https://wa.me/584248366930" },
        { icon: "instagram_icon_bg.png", text: "My IG Profile", url: "https://www.instagram.com/https.oskr/" },
        { icon: "github_icon_bg.png", text: "My Github Profile", url: "https://www.github.com/oskr46" },
        { icon: "discord_icon_bg.png", text: "My Discord", url: "https://discord.com/users/osk4r6" },
        { icon: "gmail.png", text: "Mail me", url: "mailto:oscarraf64@gmail.com" }
    ];

    return (    
        <>
            <div className="title">
                <h2>My contact info.</h2>
            </div>
            
            <div className="contenedor">
                <h2>Contact Apps</h2>
                <div className='apps-grid'>
                    {contacts.map((contact, index) => (
                        <a 
                            key={index}
                            className='contact_item' 
                            href={contact.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={`src/assets/icons/${contact.icon}`} 
                                width={45} 
                                alt={`${contact.text} icon`} 
                            />
                            <span>{contact.text}</span>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Contact;