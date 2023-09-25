import React from 'react';
import '../styles/Icons.css';

// Update the Icon component to include the text label
const Icon = ({ logo, title, url }) => {
    return (
        <div className="icon">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="Icon" className="logo" />
            </a>
            <span className="icon-title">{title}</span>
        </div>
    );
};



export default function Icons() {
    const iconsData = [
        { logo: 'linkedin-logo.png', title: 'LinkedIn', url: 'https://www.linkedin.com/in/gefen-bar/' },
        { logo: 'gmail-logo.png', title: 'Gmail', url: 'mailto:gefenbar23@gmail.com' },
        { logo: 'github-logo.png', title: 'GitHub', url: 'https://github.com/gefenbar' },
        { logo: 'github-logo.png', title: 'GitHub', url: 'https://github.com/gefenbar' },
        { logo: 'word-logo.png', title: 'Home', url: '/home' },
        { logo: 'linkedin-logo.png', title: 'Portfolio', url: '/portfolio' },
        { logo: 'linkedin-logo.png', title: 'Blog', url: '/blog' },
        { logo: 'linkedin-logo.png', title: 'About', url: '/about' },
        { logo: 'linkedin-logo.png', title: 'Contact', url: '/contact' },
    ];

    return (
        <div className="icons-container">
            <div className="icons">
                {iconsData.map((icon, index) => (
                    <Icon key={index} logo={icon.logo} title={icon.title} url={icon.url} />
                ))}
            </div>
        </div>
    );
}
