import '../styles/MouseEffect.css';
import React, { useState, useEffect } from 'react';

const Drone = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="drone" style={{ left: position.x, top: position.y }}>
            <div className="drone-body">
                <div className="drone-arm drone-arm-front"></div>
                <div className="drone-arm drone-arm-rear"></div>
                <div className="drone-rotor drone-rotor-front"></div>
                <div className="drone-rotor drone-rotor-rear"></div>
                <div className="drone-camera"></div>
            </div>
        </div>
    );
};

export default Drone;
