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
                <SocialBall logo="linkedin.png" />
                <SocialBall logo="gmail.png" />
                <SocialBall logo="github.png" />
            </div>
        </div>
    );
}
