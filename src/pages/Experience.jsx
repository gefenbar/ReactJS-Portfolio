import '../styles/Experience.css';
import { motion } from 'framer-motion';

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
    {
        title: 'Site building & maintenance | Sapir College IPO',
        date: '2019 - 2020',
        description: [
            'Maintained and updated worldwide websites using HTML, CSS, and JavaScript.',
            'Implemented website improvements to enhance user experience and site performance.',
        ],
    },
];

// Define an array of keywords relevant to your industry
const industryKeywords = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'UI', 'Speed Optimization', 'SEO',
    'Technical Support', 'Installation', 'Training', 'Software System', 'Troubleshooting'
];

export default function AboutMe() {
    // Function to wrap keywords in a <span> with a specific class
    // Function to wrap keywords in a <span> with a specific class
    function highlightKeywords(text) {
        const words = text.split(' ');
        const highlightedWords = words.map((word, wordIndex) => {
            if (industryKeywords.includes(word.replace(/[.,!?]/g, ''))) {
                return <span key={wordIndex} className="keyword-highlight">{word} </span>;
            }
            return word + ' ';
        });

        return (
            <span className="highlighted-text">
                {highlightedWords}
            </span>
        );
    }


    return (
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <div id="experience" className='section'>
                {experienceData.map((experience, index) => (
                    <div key={index}>
                        <h2>{experience.title}</h2>
                        <details>
                            <summary></summary>
                            <h3>{experience.date}</h3>
                            <ul>
                                {experience.description.map((item, itemIndex) => (
                                    <li key={itemIndex}>{highlightKeywords(item)}</li>
                                ))}
                            </ul>
                        </details>
                    </div>
                ))}
            </div>
            <br />
            <br />
        </motion.div>
    );
}
