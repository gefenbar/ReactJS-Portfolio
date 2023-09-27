import React, { useState } from 'react';
import '../styles/Experience.css';
import PageEffect from '../Components/PageEffect';
const experienceData = [
    {
        title: 'Intern | Art Division',
        date: '2021 - 2022 / London (Remote)',
        description: [
            'Developed and maintained company websites using HTML, CSS, JavaScript, and basic PHP.',
            'Fixed technical bugs and issues on client websites to improve site functionality.',
            'Addressed client requests and feedback to meet their website needs and preferences.',
            'Implemented website improvements including UI updates, speed optimizations, and basic SEO practices.',
            'Worked collaboratively with team members to complete web development projects.',
        ],
    },
    {
        title: 'Site building & maintenance | Sapir College IPO',
        date: '2019 - 2020',
        description: [
            'Maintained and updated worldwide websites using HTML, CSS, and JavaScript.',
            'Implemented website improvements to enhance user experience and site performance.',
        ],
    }, {
        title: 'Bachelor of Science (B.Sc) - Computer Science',
        date: '2019 - 2023',
        description: [
            'Recently graduated with a Bachelor of Science degree in Computer Science from Sapir College.'
        ],
    },
    {
        title: 'IT Specialist | Sapir College IT',
        date: '2018 - 2021',
        description: [
            'Provided technical support to college staff and students.',
            'Assisted with installation and training on a new exam software system.',
            'Conducted group training and one-on-one support to aid adoption of the new system.',
            'Delivered personalized guidance to help troubleshoot issues and answer questions.',
            'Ensured teachers and staff were able to use the system proficiently.',
        ],
    },
];

export default function Experience() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        if (openItem === index) {
            setOpenItem(null);
        } else {
            setOpenItem(index);
        }
    };

    return (
        <PageEffect>
            <div className="page-container">
                <div className="page-top-bar">
                    <img src="command-line-logo.webp" alt="Command Line logo" />
                    <h1>Command Line</h1>
                </div>
                <div id="experience" className="command-line-window">
                    {/* <div className="command-line-title">My Professional Experience</div> */}
                    <div className="command-line-content">
                        {experienceData.map((experience, index) => (
                            <div
                                key={index}
                                className={`experience-item ${openItem === index ? 'open' : ''}`}
                                onClick={() => toggleItem(index)}
                            >
                                <div className="experience-title">
                                    {experience.title}
                                </div>
                                <div className="experience-date">{experience.date}</div>
                                <div className="experience-description">
                                    {experience.description.map((item, itemIndex) => (
                                        <p key={itemIndex}>
                                            <span className="command-prompt">$</span> {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageEffect >);
}
