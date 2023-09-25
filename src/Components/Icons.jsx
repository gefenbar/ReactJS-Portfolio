import React from 'react';
import '../styles/Icons.css';

const Icon = ({ logo, title, url, info }) => {
    return (
        <div className="icon">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="Icon" className="logo" />
            </a>
            <span className="icon-title">{title}</span>
            <div className="info-popup">{info}</div>
        </div>
    );
};

export default function Icons() {
    const iconsData = [
        {
            logo: 'linkedin-logo.png',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gefen-bar/',
            info: 'Connect with me on LinkedIn',
        },
        {
            logo: 'gmail-logo.png',
            title: 'Gmail',
            url: 'mailto:gefenbar23@gmail.com',
            info: 'Send me an email at gefenbar23@gmail.com',
        },
        {
            logo: 'phone.png',
            title: 'Phone',
            url: 'tel:0502001376',
            info: 'Call me at 050-200-1376',
        },
        {
            logo: 'github-logo.png',
            title: 'GitHub',
            url: 'https://github.com/gefenbar',
            info: 'Visit my GitHub profile',
        },
    ];

    return (
        <div className="icons-container">
            <div className="icons">
                {iconsData.map((icon, index) => (
                    <Icon
                        key={index}
                        logo={icon.logo}
                        title={icon.title}
                        url={icon.url}
                        info={icon.info}
                    />
                ))}
            </div>
        </div>
    );
}
