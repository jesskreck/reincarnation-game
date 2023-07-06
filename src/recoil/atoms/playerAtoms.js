import { atom } from 'recoil';

export const ageAtom = atom({
    key: 'age',
    default: 20
});

export const reincarnationAtom = atom({
    key: 'reincarnation',
    default: 0
});

export const progressAtom = atom({
    key: 'progress',
    default: {
        "attrac": 0,
        "mental": 0,
        "educ": 0,
        "wealth": 0,
        "social": 0,
    }
});

