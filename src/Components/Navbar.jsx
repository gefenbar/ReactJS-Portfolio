import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    return (
        <div id="nav">
            <img id="logo" src="logo.png" alt="logo" />
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.to} className="menu_item">
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
