import { motion } from 'framer-motion';
import '../styles/Skills.css'
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
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <div id="wrap-circles"  className='section'>
                {skillsData.map((skill, index) => (
                    <div className="container-circle" key={index}>
                        {skill.name}
                        <div className="circle">
                            <img src={`images/SVG/${skill.image}`} alt={skill.name} width={100} height={150} />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
