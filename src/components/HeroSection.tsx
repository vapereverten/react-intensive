import { Link } from "react-router-dom";

const HeroSection = () => {
    return(
        <section className="hero-section">
                <div className="hero-section-content">
                    <p className="hero-section-aditional-text">Merry Christmas</p>

                    <h1 className="hero-section-main-text">
                        Gift yourself <br /> the magic of new possibilities
                    </h1>

                    <Link to="/gifts" className="hero-section-button">Explore Magicial Gifts</Link>

                    <p className="hero-section-aditional-text">and Happy New Year</p>
                </div>
            </section>
    );
};

export default HeroSection;