export interface PlayerObject {
    age: number;
    reincarnate: boolean;
    attractiveness: number;
    mental: number;
    education: number;
    wealth: number;
    social: number;
}

export interface ActionObject {
    text: string;
    category: string;
    subcategory: string;
    attractiveness?: number;
    mental?: number;
    education?: number;
    wealth?: number;
    social?: number;
}

export interface AlbumObject {
    photos?: Photo[];
}

export interface Photo {
    url: string;
    action: ActionObject;
}