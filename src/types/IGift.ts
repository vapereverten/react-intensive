import { GiftsEnum } from "./GiftsEnum";

export interface IGift{
    name: string;
    description: string;
    type: GiftsEnum;
    superpower: {
        live: number;
        create: number;
        love: number;
        dream: number;
    };
};