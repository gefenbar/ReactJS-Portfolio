import React, { useState } from 'react';
import '../styles/Skills.css';
import PageEffect from '../Components/PageEffect';

const skillsData = [
    { name: 'HTML', image: 'html.svg' },
    { name: 'CSS', image: 'css.svg' },
    { name: 'JavaScript', image: 'js.svg' },
    { name: 'Linux', image: 'linux.svg' },
    { name: 'Java', image: 'java.svg' },
    { name: 'Python', image: 'python.svg' },
    { name: 'Github', image: 'github.svg' },
    { name: 'C#', image: 'csharp.svg' },
    { name: 'Selenium', image: 'selenium.png' },
    { name: 'React', image: 'react.svg' },
    { name: 'Flask', image: 'flask.svg' },
    { name: 'SQL', image: 'sql.png' },


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
                    <img src="youtube-logo.png" alt="Windows Icon" />
                    <h1>Youtube</h1>
                </div>
                {isButtonClicked ? (
                    <div id="wrap-circles" className="section">
                        {skillsData.map((skill, index) => (
                            <div className="container-circle" key={index}>
                                {skill.name}
                                <div className="circle">
                                    <img
                                        src={`/SVG/${skill.image}`}
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
                            {/* Add your play button icon here */}
                            <div className="play-icon">&#9654;</div>
                        </button>
                    </div>
                )}
            </div>
        </PageEffect>
    );
}