import React, { useState } from 'react';
import '../styles/Skills.css';
import PageEffect from '../Components/PageEffect';

const skillsData = [
    { name: 'HTML', image: 'html.webp' },
    { name: 'CSS', image: 'css.webp' },
    { name: 'JavaScript', image: 'js.webp' },
    { name: 'Linux', image: 'linux.webp' },
    { name: 'Java', image: 'java.webp' },
    { name: 'Python', image: 'python.webp' },
    { name: 'Flask', image: 'flask.webp' },
    { name: 'React', image: 'react.webp' },
    { name: 'Github', image: 'github.webp' },
    { name: 'Selenium', image: 'selenium.webp' },

    { name: 'SQL', image: 'sql.webp' },
    { name: 'C#', image: 'csharp.webp' },
];


export default function Skills() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(true);
    };

    return (
        <PageEffect>
            <div className="page-container">
                <div className="page-top-bar">
                    <img src="youtube-logo.webp" alt="Windows Icon" />
                    <h1>Youtube</h1>
                </div>
                {isButtonClicked ? (
                    <div id="wrap-circles" className="section">
                        {skillsData.map((skill, index) => (
                            <div className="container-circle" key={index}>
                                {skill.name}
                                <div className="circle">
                                    <img
                                        src={`/${skill.image}`}
                                        alt={skill.name}
                                        width={100}
                                        height={150}
                                        className="rotate"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="play-button-container">
                        <button className="play-button" onClick={handleButtonClick}>
                            <img src="play-button.webp" alt="Play" className="play-icon" />
                        </button>
                    </div>

                )}
            </div>
        </PageEffect>
    );
}