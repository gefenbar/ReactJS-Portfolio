import '../styles/Experience.css';
import { motion } from 'framer-motion';

const experienceData = [
    {
        title: 'Intern | Art Division',
        date: 'Oct 2021 - Feb 2022',
        description: `Website building and maintenance internship in a UK based company. I
                  have designed and built websites and was in charge of their
                  maintenance: Worked to resolve sites’ Back-end and Front-end bugs
                  using WP, CSS, JS Have been working with customers to resolve the
                  issues they were facing and assisting them with implementation.`,
    },
    {
        title: 'IT Specialist | Sapir College IT',
        date: 'Nov 2018 - May 2021',
        description: `2.5 years of technical support to teachers students and executive
                  staff. Implemented and trained customers with third party exam
                  management system: Gave technical installation training and support
                  Conducted class lectures to teachers Gave personal face to face
                  guidance and remote support`,
    },
    {
        title: 'Site building & maintenance | Sapir College IPO',
        date: 'Jul 2019 - Sep 2020',
        description: `Worldwide site management, performance and usability enhancement:
                  Designed and managed sites worldwide Designed and maintained usability
                  of sites. Assigned as UX specialist for multiple websites.`,
    },
];

export default function AboutMe() {
    return (
        <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <section id="experience_section" className="hidden">
                <div id="experience">
                    <h1>My Experience</h1>
                    <br />
                    {experienceData.map((experience, index) => (
                        <div key={index}>
                            <h2>{experience.title}</h2>
                            <details>
                                <summary></summary>
                                <h3>{experience.date}</h3>
                                <p>{experience.description}</p>
                            </details>
                        </div>

                    ))}

                </div>
                <br />
                <br />
            </section>
        </motion.div>
    );
}
