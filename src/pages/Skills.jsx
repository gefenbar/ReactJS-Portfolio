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
];

export default function Skills() {
    return (
        <PageEffect>            <div className="skills file-manager-container">
            <div className="file-manager-top-bar">
                <img src="youtube-logo.png" alt="Windows Icon" />
                <h1>Youtube</h1>
            </div>
            <div id="wrap-circles" className="section">
                {skillsData.map((skill, index) => (
                    <div className="container-circle" key={index}>
                        {skill.name}
                        <div className="circle">
                            <img src={`/SVG/${skill.image}`} alt={skill.name} width={100} height={150} className="rotate" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </PageEffect>);
}
