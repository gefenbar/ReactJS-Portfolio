import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import DarkModeBtn from './DarkModeBtn';

const navItems = [
    { to: '/', label: 'Home', icon: 'word-logo.png' },
    { to: '/experience', label: 'Experience', icon: 'command-line-logo.png' },
    { to: '/skills', label: 'Skills', icon: 'youtube-logo.png' },
    { to: '/projects', label: 'Projects', icon: 'folder-logo.png' },
    { to: '/contact', label: 'Contact', icon: 'mail-logo.png' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Function to update current time and date
        const updateDateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
            const dateString = now.toLocaleDateString();
            setCurrentTime(timeString);
            setCurrentDate(dateString);
        };

        // Update the time and date initially
        updateDateTime();

        // Update the time and date every minute
        const intervalId = setInterval(updateDateTime, 60000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="nav">
            <div className="datetime">
                <div className="time">{currentTime}</div>
                <div className="date">{currentDate}</div>
            </div>
            <DarkModeBtn />


            {/* Mobile-friendly menu */}
            <div className="mobile-menu">

                <ul className={`menu-items ${menuOpen ? 'open' : 'close'}`}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.to} className="menu_item" onClick={toggleMenu}>
                                <img src={item.icon} alt={item.label} className="menu-icon" />
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={`small-menu-button ${menuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
                    {menuOpen ? '✕' : <img src="windows.png" alt="Menu" />}
                </div>

            </div>
        </div>
    );
}