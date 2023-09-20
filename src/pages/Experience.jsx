import '../styles/Experience.css'
import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <section id="experience_section" className="hidden">
                <div id="experience">
                    <h1>My Experience</h1>
                    <br />
                    <div>
                        <h2>Intern | Art Division</h2>
                        <details>
                            <summary />
                            <h3> Oct 2021 - Feb 2022</h3>
                            <p>
                                Website building and maintenance internship in a UK based company. I
                                have designed and built websites and was in charge of their
                                maintenance: Worked to resolve sites’ Back-end and Front-end bugs
                                using WP, CSS, JS Have been working with customers to resolve the
                                issues they were facing and assisting them with implementation.
                            </p>
                        </details>
                    </div>
                    <br />
                    <div>
                        <h2>IT Specialist | Sapir College IT</h2>
                        <details>
                            <summary></summary>
                            <h3> Nov 2018 - May 2021</h3>
                            <p>
                                2.5 years of technical support to teachers students and executive
                                staff. Implemented and trained customers with third party exam
                                management system: Gave technical installation training and support
                                Conducted class lectures to teachers Gave personal face to face
                                guidance and remote support
                            </p>
                        </details>
                    </div>
                    <br />
                    <div>
                        <h2> Site building &amp; maintenance | Sapir College IPO</h2>
                        <details>
                            <summary></summary>
                            <h3> Jul 2019 - Sep 2020</h3>
                            <p>
                                Worldwide site management, performance and usability enhancement:
                                Designed and managed sites worldwide Designed and maintained usability
                                of sites. Assigned as UX specialist for multiple websites.
                            </p>
                        </details>
                    </div>
                </div>
                <br />
                <br />
            </section>
        </motion.div>
    )
}