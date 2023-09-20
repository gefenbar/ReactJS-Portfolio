import '../styles/Projects.css'
import { motion } from 'framer-motion';

export default function Project() {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <section id="projects_section" className="hidden">
                <h1>Projects</h1>
                <div className="projects">
                    <button
                        type="button"
                        onClick={() => window.location.href = "https://github.com/gefenbar/Website-Eye-Robot-full-version"}
                    >
                        Final Year
                        <br />
                        Project
                    </button>
                </div>
                <div className="projects">
                    <button
                        type="button"
                        onClick={() => window.location.href = "https://github.com/gefenbar/Prototype5"}
                    >
                        Unity
                        <br />
                        Game
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        onClick={() => window.location.href = "https://github.com/gefenbar/"}
                    >
                        {" "}
                        More on my GitHub account..
                    </button>
                </div>
            </section>
        </motion.div >

    );
}
