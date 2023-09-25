import React, { useEffect, useState } from 'react';
import '../styles/Word.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Word() {
    const text_first = "Hi, my name is";
    const text_second = "Gefen Bar";
    const text_third = "I’m a Software Developer.";
    const text_fourth = "I’m highly motivated and proactive, eager to contribute to a tech-leading company.";

    const [showFirstLine, setShowFirstLine] = useState(false);
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [showThirdLine, setShowThirdLine] = useState(false);
    const [showFourthLine, setShowFourthLine] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowFirstLine(true), 300);
        const timer2 = setTimeout(() => setShowSecondLine(true), text_first.length * 110);
        const timer3 = setTimeout(() => setShowThirdLine(true), (text_first.length + text_second.length) * 120);
        const timer4 = setTimeout(() => setShowFourthLine(true), (text_first.length + text_second.length + text_third.length) * 124);
        const buttonTimer = setTimeout(() => setShowButton(true), 14500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(buttonTimer);
        };
    }, []);

    return (
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <div id="Word" className='section'>
                {/* Add a Word document frame image */}
                <img src="word.png" alt="Word Frame" className="word-frame" />
                <div className="word-content">
                    <h1 id="h1_on_Word">
                        {showFirstLine && (
                            <Typewriter words={[text_first]} loop={1} cursor={false} typeSpeed={50} />
                        )}
                    </h1>
                    <h2 id="h2_on_Word">
                        {showSecondLine && (
                            <Typewriter words={[text_second]} loop={1} cursor={false} typeSpeed={100} />
                        )}
                    </h2>
                    <h3 id="h3_on_Word">
                        {showThirdLine && (
                            <Typewriter words={[text_third]} loop={1} cursor={false} typeSpeed={100} />
                        )}
                    </h3>
                    <h4 id="h4_on_Word">
                        {showFourthLine && (
                            <Typewriter words={[text_fourth]} loop={1} cursor={false} typeSpeed={100} />
                        )}
                    </h4>
                    <br />
                    {showButton && (
                        <a href="files/Gefen_Bar_Resume.pdf" id="button_on_Word" target="_blank" download="gefen_bar_resume" >
                            Download Resume
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
