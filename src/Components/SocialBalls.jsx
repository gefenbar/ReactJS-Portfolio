import React from 'react';
import '../styles/SocialBalls.css';

const SocialBall = ({ logo }) => {
    return (
        <div className="social-ball">
            <div className="ball">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        </div>
    );
};

export default function SocialBalls() {
    return (
        <div className="social-balls-container">
            <div className="social_balls">
                <a href="https://www.linkedin.com/in/gefen-bar/" target='_blank' ><SocialBall logo="linkedin.png" /></a>
                <a href="mailto:gefenbar23@gmail.com"><SocialBall logo="gmail.png" /></a>
                <a href="https://github.com/gefenbar" target='_blank' ><SocialBall logo="github.png" /></a>
            </div>
        </div>
    );
}
