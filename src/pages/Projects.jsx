import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
    {
        name: 'Final Year Project',
        url: 'https://github.com/gefenbar/Website-Eye-Robot-full-version',
        image: 'orangeTexture.jpg', // Replace with actual image URL
        description: '',
    },
    {
        name: 'Unity Game',
        url: 'https://github.com/gefenbar/Prototype5',
        image: 'pinkTexture.jpg', // Replace with actual image URL
        description: '',
    },
    {
        name: 'More on my GitHub account..',
        url: 'https://github.com/gefenbar/',
        image: 'paperTexture.jpg', // Replace with actual image URL
        description: '',
    },
];

export default function Project() {
    return (
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <div id="projects"  className='section'>
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
