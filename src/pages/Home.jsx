import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { Typewriter } from 'react-simple-typewriter';
import PageEffect from '../Components/PageEffect';

export default function Home() {
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
        const timer1 = setTimeout(() => setShowFirstLine(true), 500);
        const timer2 = setTimeout(() => setShowSecondLine(true), text_first.length * 107);
        const timer3 = setTimeout(() => setShowThirdLine(true), (text_first.length + text_second.length) * 117);
        const timer4 = setTimeout(() => setShowFourthLine(true), (text_first.length + text_second.length + text_third.length) * 110);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <PageEffect>
            <div className="page-container">
                <div className="page-top-bar">
                    <img src="word-logo.webp" alt="Windows Icon" />
                    <h1>Word</h1>
                </div>
                <div id="Word" className='section'>
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
                        <br />
                        <h4 id="h4_on_Word">
                            {showFourthLine && (
                                <Typewriter words={[text_fourth]} loop={1} cursor={false} typeSpeed={100} />
                            )}
                        </h4>
                        <br />

                    </div>
                </div>
            </div>
        </PageEffect>
    );
}
