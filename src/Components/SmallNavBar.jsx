import React from 'react';
import { NavLink } from 'react-router-dom';

const SmallNavbar = ({ navItems, toggleMenu }) => {
    return (
        <div className="small-navbar">
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.to} className="menu_item" onClick={toggleMenu}>
                            <img src={item.icon} alt={item.label} className="menu-icon" />
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SmallNavbar;
