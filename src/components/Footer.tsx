import cu from '../img/CU.png';
import mf from '../img/MF.png';
import gmc from '../img/GMC.png';
import tg from '../img/tg.png';
import f from '../img/f.png';
import i from '../img/I.png';
import x from '../img/X.png';

const Footer = () => {
    return(
         <footer className="footer">
            <div className="footer-container">
                
                <div className="footer-contacts">
                    
                    <div className="contact-card">
                        <img src={cu} alt="Call us" className="contact-icon"/>
                        <h2 className="contact-info">+375 (29) 111-22-33</h2>
                        <h3 className="contact-label">Call Us</h3>
                    </div>

                    <div className="contact-card">
                        <img src={mf} alt="Magic forest" className="contact-icon"/>
                        <h2 className="contact-info">Magic forest</h2>
                        <h3 className="contact-label">meet us</h3>
                    </div>

                    <div className="contact-card">
                        <img src={gmc} alt="Email" className="contact-icon"/>
                        <h2 className="contact-info">gifts@magic.com</h2>
                        <h3 className="contact-label">write us</h3>
                    </div>

                </div>

                <div className="footer-bottom">
                    
                    <div className="social-links">
                        <a href="#" className="social-link">
                            <img src={tg} alt="Telegram"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src={f} alt="Facebook"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src={i} alt="Instagram"/>
                        </a>
                        <a href="#" className="social-link">
                            <img src={x} alt="Twitter"/>
                        </a>
                    </div>

                    <p className="copyright-text">
                        © Copyright 2025, All Rights Reserved
                    </p>
                    
                    <p className="made-by-text">
                        Made by Pereverten
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;