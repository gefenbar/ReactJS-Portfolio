import React from 'react';
import '../styles/Icons.css';

const Icon = ({ logo }) => {
    return (
        <div className="icon">
            <img src={logo} alt="Icon" className="logo" />
        </div>
    );
};

export default function Icons() {
    return (
        <div className="icons-container">
            <div className="icons">
                {/* Social icons */}
                <a href="https://www.linkedin.com/in/gefen-bar/" target='_blank'><Icon logo="linkedin.png" /></a>
                <a href="mailto:gefenbar23@gmail.com"><Icon logo="gmail-logo.png" /></a>
                <a href="https://github.com/gefenbar" target='_blank'><Icon logo="github.png" /></a>
                <a href="https://github.com/gefenbar" target='_blank'><Icon logo="github.png" /></a>
                {/* Page icons */}
                {/* <a href="/home"><Icon logo="home.png" /></a>
                <a href="/portfolio"><Icon logo="portfolio.png" /></a>
                <a href="/blog"><Icon logo="blog.png" /></a>
                <a href="/about"><Icon logo="about.png" /></a>
                <a href="/contact"><Icon logo="contact.png" /></a> */}
            </div>
        </div>
    );
}
