import React from 'react';
import { IGift } from '../types/IGift';
import { GiftsDetails } from '../types/GiftDetails';

import stars5 from '../img/5.png';
import stars4 from '../img/4.png';
import stars3 from '../img/3.png';
import stars2 from '../img/2.png';
import stars1 from '../img/1.png';

interface GiftModalProps {
    gift: IGift;
    onClose: () => void;
}

const GiftModal: React.FC<GiftModalProps> = ({ gift, onClose }) => {

    const details = GiftsDetails[gift.type] || { img: '', title: 'Unknown', className: '' };

    const getStarsImage = (value: number) => {
        const starsCount = Math.floor(value / 100); 
        switch (starsCount) {
            case 5: return stars5;
            case 4: return stars4;
            case 3: return stars3;
            case 2: return stars2;
            case 1: return stars1;
            default: return stars1;
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                
                <button className="modal-close-btn" onClick={onClose}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 14L14 26" stroke="#181C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 14L26 26" stroke="#181C29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="modal-image-wrapper">
                    <img src={details.img} alt={gift.name} />
                </div>

                <div className="modal-content-body">
                    
                    <div className="modal-text-block">
                        <h4 className={`modal-category ${details.className}`}>
                            {details.title}
                        </h4>
                        <h3 className="modal-title">{gift.name}</h3>
                        <p className="modal-description">{gift.description}</p>
                    </div>

                    <div className="modal-superpowers-block">
                        <p className="superpowers-label">ADDS SUPERPOWERS TO:</p>
                        
                        <div className="superpowers-list">
                            {Object.entries(gift.superpower).map(([key, value]) => (
                                <div key={key} className="superpower-row">
                                    <span className="sp-name">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </span>
                                    
                                    <span className="sp-value">+{value}</span>
                                    
                                    <div className="sp-stars-box">
                                        <img 
                                            src={getStarsImage(value)} 
                                            alt={`${value} stars`} 
                                            className="sp-stars-img"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GiftModal;