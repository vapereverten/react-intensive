import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ForestTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateTimeLeft = () => {
        const destinationDate = new Date('2026-01-01T00:00:00').getTime();
        const now = new Date().getTime();
        const difference = destinationDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    };

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const addLeadingZero = (num: number) => {
        return num < 10 ? `0${num}` : num;
    };

    return(
        <section className="forest-section-bg-picture">
            <div className="cta-container forest-section-bg">
                
                <h2 className="cta-title">
                    Ready to start your journey to a better version of yourself?
                </h2>

                <Link to="/gifts" className="hero-section-button">Explore Magical Gifts</Link>

                <div className="timer-wrapper">
                    <p className="timer-caption">The New Year is Coming Soon...</p>
                    
                    <div className="timer-box">
                        <div className="timer-item">
                            <span className="timer-number">{addLeadingZero(timeLeft.days)}</span>
                            <span className="timer-label">Days</span>
                        </div>
                        
                        <div className="timer-separator"></div>

                        <div className="timer-item">
                            <span className="timer-number">{addLeadingZero(timeLeft.hours)}</span>
                            <span className="timer-label">Hours</span>
                        </div>

                        <div className="timer-separator"></div>

                        <div className="timer-item">
                            <span className="timer-number">{addLeadingZero(timeLeft.minutes)}</span>
                            <span className="timer-label">Minutes</span>
                        </div>

                        <div className="timer-separator"></div>

                        <div className="timer-item">
                            <span className="timer-number">{addLeadingZero(timeLeft.seconds)}</span>
                            <span className="timer-label">Seconds</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ForestTimer;