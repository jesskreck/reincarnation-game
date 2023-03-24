export interface PlayerObject {
    age: number;
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