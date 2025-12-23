import { GiftsEnum } from './GiftsEnum';

import workImg from '../img/gift-for-work.png';
import healthImg from '../img/gift-for-health.png';
import harmonyImg from '../img/gift-for-harmony.png';

export const GiftsDetails = {
    [GiftsEnum.forWork]: {
        title: 'For Work',
        img: workImg, 
        className: 'gift-category text-blue'
    },
    [GiftsEnum.forHealth]: {
        title: 'For Health',
        img: healthImg,
        className: 'gift-category text-green'
    },
    [GiftsEnum.forHarmony]: {
        title: 'For Harmony',
        img: harmonyImg,
        className: 'gift-category text-pink'
    }
};