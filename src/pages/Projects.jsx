import React from 'react';
import '../styles/Projects.css';
import PageEffect from '../Components/PageEffect';
const projectsData = [
    {
        name: 'Final Year Project',
        url: 'https://github.com/gefenbar/Website-Eye-Robot-full-version',
        description: '',
    },
    {
        name: 'Unity Game',
        url: 'https://github.com/gefenbar/Prototype5',
        description: '',
    },
    {
        name: 'More on my GitHub account..',
        url: 'https://github.com/gefenbar/',
        description: '',
    },
];

export default function Projects() {
    return (
        <PageEffect>
            <div className="projects file-manager-container">
                <div className="file-manager-top-bar">
                    <img src="folder-logo.png" alt="File Manager Icon" />
                    <h1>File Manager</h1>
                </div>
                <div id="projects" className="section">
                    {projectsData.map((project, index) => (
                        <div className="folder-card" key={index}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <div className="folder-icon">
                                    <img src="folder-logo.png" alt="Folder Icon" />
                                </div>
                                <div className="folder-info">
                                    <h2>{project.name}</h2>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </PageEffect>);
}
