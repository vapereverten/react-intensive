import { IGift } from '../types/IGift';       
import { GiftsEnum } from '../types/GiftsEnum';       
import { GiftsDetails } from '../types/GiftDetails'; 
import mockData from '../MockData.json';

import GiftModal from './GiftModal';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const RetriveData = (count?: number | null, type?: GiftsEnum | null): IGift[] => {
    let gifts: IGift[] = mockData as unknown as IGift[];

    if (type) {
        gifts = gifts.filter(gift => gift.type === type);
    }

    if (count) {
        return gifts.slice(0, count);
    }
    return gifts;
}

const GiftsBlock = ({ gifts, onCardClick }: { gifts: IGift[]; onCardClick: (gift: IGift) => void }) => {
    return (
        <div className="gifts-grid">
            {gifts.map((gift, index) => {
                const details = GiftsDetails[gift.type];

                if (!details) return null; 

                return (
                    <div key={index} className="gift-card" onClick={() => onCardClick(gift)}>
                        <div className="gift-image-box">
                            <img 
                                src={details.img} 
                                alt={details.title} 
                                className="gift-img" 
                            />
                        </div>
                        <div className="gift-content-box">
                            <h4 className={details.className}>
                                {details.title}
                            </h4>
                            <h3 className="gift-name">{gift.name}</h3>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const GiftSection = () => {
    const [filter, setFilter] = useState<GiftsEnum | null>(null);
    const [selectedGift, setSelectedGift] = useState<IGift | null>(null);

    const location = useLocation();

    const handleCloseModal = () => {
        setSelectedGift(null);
    }

    const getSectionContent = () => {
        if(location.pathname === '/') {
            const giftsData = RetriveData(4);
            return (
                <section className="gifts-section">
                    <div className="gifts-header">
                        <p className="gifts-caption">Best Gifts</p>
                        <h2 className="gifts-title">especially for you</h2>
                    </div>

                    <GiftsBlock gifts={giftsData} onCardClick={setSelectedGift} /> 
                </section>
            );
        }

        if(location.pathname === '/gifts') {
            const filteredGifts = RetriveData(null, filter);
            return (
                <section className="gifts-section gifts-page-container">
                    <div className="gifts-page-header">
                        <h1 className="gifts-page-title">Achieve health, harmony, and <br/> inner strength</h1>
                    </div>
                    <div className="gifts-tabs">
                        <button className={`tab-btn ${filter === null ? 'active' : ''}`} onClick={() => setFilter(null)}>All</button>
                        <button className={`tab-btn ${filter === GiftsEnum.forWork ? 'active' : ''}`} onClick={() => setFilter(GiftsEnum.forWork)}>For Work</button>
                        <button className={`tab-btn ${filter === GiftsEnum.forHealth ? 'active' : ''}`} onClick={() => setFilter(GiftsEnum.forHealth)}>For Health</button>
                        <button className={`tab-btn ${filter === GiftsEnum.forHarmony ? 'active' : ''}`} onClick={() => setFilter(GiftsEnum.forHarmony)}>For Harmony</button>
                    </div>
                    
                    <GiftsBlock gifts={filteredGifts} onCardClick={setSelectedGift} />
                </section>
            );
        }
        return null;
    }

    return (
        <>
            {getSectionContent()}
            
            {/* Якщо selectedGift існує, малюємо модалку */}
            {selectedGift && (
                <GiftModal gift={selectedGift} onClose={handleCloseModal} />
            )}
        </>
    );
};

export default GiftSection;