const ForestTimer = () => {
    return(
        <section className="forest-section-bg-picture">
                <div className="cta-container forest-section-bg">
                    
                    <h2 className="cta-title">
                        Ready to start your journey to a better version of yourself?
                    </h2>

                    <a href="#" className="hero-section-button">Explore Magical Gifts</a>

                    <div className="timer-wrapper">
                        <p className="timer-caption">The New Year is Coming Soon...</p>
                        
                        <div className="timer-box">
                            <div className="timer-item">
                                <span className="timer-number">20</span>
                                <span className="timer-label">Days</span>
                            </div>
                            
                            <div className="timer-separator"></div>

                            <div className="timer-item">
                                <span className="timer-number">15</span>
                                <span className="timer-label">Hours</span>
                            </div>

                            <div className="timer-separator"></div>

                            <div className="timer-item">
                                <span className="timer-number">34</span>
                                <span className="timer-label">Minutes</span>
                            </div>

                            <div className="timer-separator"></div>

                            <div className="timer-item">
                                <span className="timer-number">12</span>
                                <span className="timer-label">Seconds</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    );
};

export default ForestTimer;