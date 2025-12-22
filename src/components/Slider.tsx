import { useState } from 'react';
import snowman from '../img/snowman.png';
import christmasTrees from '../img/christmas-trees.png';
import christmasTreeBall from '../img/christmas-tree-ball.png';
import fairytaleHouse from '../img/fairytale-house.png';

import arrowLeft from '../img/LeftArrow.png';
import arrowRight from '../img/RightArrow.png';

const Slider = () => {
    const [offset, setOffset] = useState(0);

    const STEP = 400; 
    
    const MAX_OFFSET = -(STEP * 2); 

    const handleNext = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - STEP;
            return Math.max(newOffset, MAX_OFFSET);
        });
    };

    const handlePrev = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + STEP;
            return Math.min(newOffset, 0);
        });
    };

    return (
        <section className="slider-section">
            <div className="slider-container">
                
                <div className="slider-header">
                    <p className="slider-caption">Become Happier!</p>
                    <h2 className="slider-title">in the new 2025</h2>
                </div>

                <div className="slider-window">
                    <div 
                        className="slider-track"
                        style={{ transform: `translateX(${offset}px)` }}
                    >
                        <div className="slider-item">
                            <h2 className="slider-text">Live</h2>
                            <img src={snowman} alt="snowman" className="slider-img" />
                        </div>

                        <div className="slider-item">
                            <h2 className="slider-text">Create</h2>
                            <img src={christmasTrees} alt="Christmas tree" className="slider-img" />
                        </div>

                        <div className="slider-item">
                            <h2 className="slider-text">Love</h2>
                            <img src={christmasTreeBall} alt="Christmas tree ball" className="slider-img" />
                        </div>

                        <div className="slider-item">
                            <h2 className="slider-text">Dream</h2>
                            <img src={fairytaleHouse} alt="Fairytale house" className="slider-img" />
                        </div>
                    </div>
                </div>

                <div className="slider-controls">
                    <button 
                        className="slider-btn" 
                        onClick={handlePrev} 
                        disabled={offset === 0}
                    >
                        <img src={arrowLeft} alt="Prev" />    
                    </button>

                    <button 
                        className="slider-btn" 
                        onClick={handleNext}
                        disabled={offset <= MAX_OFFSET}
                    >
                        <img src={arrowRight} alt="Next" />  
                    </button> 
                </div>

            </div>
        </section>
    );
};

export default Slider;