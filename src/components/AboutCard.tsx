import santaImg from '../img/santa.png'; 
const AboutCard = () => {
    return(
        <section className="section">
                <div className="about-card">

                    <div className="about-content">

                        <p className="about-caption">About</p>
                        <h2 className="about-title">Unleash your inner superhero!</h2>
                        <p className="about-description">
                            This New Year marks the beginning of your journey 
                            to inner harmony and new strengths. We offer
                            unique gifts that will help you improve your life.
                        </p>
                    </div>

                    <div className="about-image-wrapper">
                        <img src={santaImg} alt="Santa and snowman" className="about-img" />
                    </div>
                </div>
            </section>

    );
};

export default AboutCard;