import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div id="nav">
            <img id="logo" src="logo.png" alt="logo" />
            <ul>
                <li>
                    <NavLink to="/" className="menu_item">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className="menu_item">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills" className="menu_item">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="menu_item">
                        About me
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/experience" className="menu_item">
                        Experience
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
