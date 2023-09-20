import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="contain">
                    <div className="col">
                        <ul>
                            <a href='tel:972502001376'>
                                <li>050-200-1376</li>
                            </a>
                            <a href='mailto:gefenbar003@gmail.com'>
                                <li>gefenbar003@gmail.com</li>
                            </a>
                        </ul>
                    </div>
                    <div className="col">
                        <p id="copyright">Copyright © Gefen Bar 2023. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
