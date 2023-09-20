import { motion } from 'framer-motion';
import '../styles/Projects.css';
import AnimatedPageWrapper from '../Components/AnimatedPageWrapper';

const projectsData = [
    { name: 'Final Year Project', url: 'https://github.com/gefenbar/Website-Eye-Robot-full-version' },
    { name: 'Unity Game', url: 'https://github.com/gefenbar/Prototype5' },
    { name: 'More on my GitHub account..', url: 'https://github.com/gefenbar/' },
];

export default function Project() {
    return (
        <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <section id="projects_section" className="hidden">
                <h1>Projects</h1>
                <div className="projects">
                    {projectsData.map((project, index) => (
                        <button type="button" key={index} onClick={() => window.location.href = project.url}>
                            {project.name}
                        </button>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}
