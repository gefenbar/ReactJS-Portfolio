import { Canvas } from '@react-three/fiber';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <ul>
                            <a href='tel:972502001376'>    <li>050-200-1376</li></a>
                            <a href='mailto:gefenbar003@gmail.com' ><li>gefenbar003@gmail.com</li></a>
                        </ul>
                    </div>
                    <div className="col">
                        <p id="copyright">Copyright © Gefen Bar 2022. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


// <ul className="footer_social">
//               <li>
//                 <a href="https://www.linkedin.com/in/gefen-bar-software-developer/" target="_blank">
//                   <img src="images/SVG/linkedin_logo.svg" alt="linkedin icon" />
//                 </a>
//               </li>
//               <li>
//                 <a href="https://wa.me/972502001376" target="_blank">
//                   <img src="images/SVG/whatsapp_logo.svg" alt="whatsapp icon" />
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:gefenbar003@gmail.com" target="_blank">
//                   <img src="images/SVG/email_logo.svg" alt="email icon" />
//                 </a>
//               </li>
//             </ul>