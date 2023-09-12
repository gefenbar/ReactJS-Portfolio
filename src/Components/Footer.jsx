import { Canvas } from '@react-three/fiber';
import '../styles/Footer.css'
export default function Footer() {
    return (

        <footer>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <h5>contact</h5>
                        <ul className="footer_social">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/gefen-bar-software-developer/"
                                    target="_blank"
                                >
                                    <img src="images/SVG/linkedin_logo.svg" alt="linkedin icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/972502001376" target="_blank">
                                    <img src="images/SVG/whatsapp_logo.svg" alt="whatsapp icon" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:gefenbar003@gmail.com" target="_blank">
                                    <img src="images/SVG/email_logo.svg" alt="email icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>information</h5>
                        <ul>
                            <li>gefenbar003@gmail.com</li>
                            <li>050-200-1376</li>
                            <li>Erez, Israel</li>
                        </ul>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
            <p id="copyright">Copyright © Gefen Bar 2022. All Rights Reserved</p>
        </footer>


    )
}

