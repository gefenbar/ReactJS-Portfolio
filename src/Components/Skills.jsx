import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <section id="skills_section" className="hidden">
                <h1>Skills</h1>
                <div className="wrap-circles">
                    <div className="container-circle">
                        HTML
                        <div className="circle">
                            <img src="images/SVG/html.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                    <div className="container-circle">
                        CSS
                        <div className="circle">
                            <img src="images/SVG/css.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                    <div className="container-circle">
                        JavaScript
                        <div className="circle">
                            <img src="images/SVG/js.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                    <div className="container-circle">
                        Linux
                        <div className="circle">
                            <img src="images/SVG/linux.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                </div>
                <div className="wrap-circles">
                    <div className="container-circle">
                        Java
                        <div className="circle">
                            <img src="images/SVG/java.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                    <div className="container-circle">
                        Python
                        <div className="circle">
                            <img src="images/SVG/python.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                    <div className="container-circle">
                        Github
                        <div className="circle">
                            <img src="images/SVG/github.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                    <div className="container-circle">
                        C#
                        <div className="circle">
                            <img src="images/SVG/csharp.svg" alt="" width={100} height={150} />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>

    );
}
