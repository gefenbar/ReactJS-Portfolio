// HeroSection.js
import React, { useEffect } from 'react';
import * as THREE from 'three';

export default function Hero() {
    return (
        <section id="hero_section" className="hidden">
            <div id="hero">
                {/* <div id="views-container">
                <span id="view-text">Views:</span>
                <span id="view-count" class="loading">Loading...</span>
            </div>
            <div id="downloads-container">
                <span id="download-text">Resume Downloads:</span>
                <span id="download-count" class="loading">Loading...</span>
            </div> */}
                <h1 id="h1_on_hero">‌</h1>
                <h2 id="h2_on_hero">‌</h2>
                <h3 id="h3_on_hero">‌</h3>
                <h4 id="h4_on_hero">‌</h4>
                <br />
                <a
                    href="files/gefen_bar_resume.docx"
                    id="button_on_hero"
                    target="_blank"
                    download="gefen_bar_resume"
                >
                    Download Resume
                </a>
            </div>
        </section>

    );
}
