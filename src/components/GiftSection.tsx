import workImg from '../img/gift-for-work.png';
import healthImg from '../img/gift-for-health.png';
import harmonyImg from '../img/gift-for-harmony.png';

const GiftSection = () => {
    return(
        <section className="gifts-section">
            <div className="gifts-header">
                <p className="gifts-caption">Best Gifts</p>
                <h2 className="gifts-title">especially for you</h2>
            </div>

            <div className="gifts-grid">
                
                <div className="gift-card">
                    <div className="gift-image-box">
                        <img src={workImg} alt="gift-for-work" className="gift-img" />
                    </div>
                    <div className="gift-content-box">
                        <h4 className="gift-category text-blue">For work</h4>
                        <h3 className="gift-name">Console.log Guru</h3>
                    </div>
                </div>

                <div className="gift-card">
                    <div className="gift-image-box">
                        <img src={healthImg} alt="gift-for-health" className="gift-img" />
                    </div>
                    <div className="gift-content-box">
                        <h4 className="gift-category text-green">For health</h4>
                        <h3 className="gift-name">Hydration Bot</h3>
                    </div>
                </div>

                <div className="gift-card">
                    <div className="gift-image-box">
                        <img src={workImg} alt="gift-for-work" className="gift-img" />
                    </div>
                    <div className="gift-content-box">
                        <h4 className="gift-category text-blue">For work</h4>
                        <h3 className="gift-name">Merge Master</h3>
                    </div>
                </div>

                <div className="gift-card">
                    <div className="gift-image-box">
                        <img src={harmonyImg} alt="gift-for-harmony" className="gift-img" />
                    </div>
                    <div className="gift-content-box">
                        <h4 className="gift-category text-pink">For harmony</h4>
                        <h3 className="gift-name">Spontaneous Coding Philosopher</h3>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GiftSection;