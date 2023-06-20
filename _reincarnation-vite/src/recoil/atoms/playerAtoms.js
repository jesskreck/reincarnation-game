import { atom } from 'recoil';

const ageAtom = atom({
    key: 'age',
    default: 20
});

const reincarnationAtom = atom({
    key: 'reincarnation',
    default: 0
});

const progressAtom = atom({
    key: 'progress',
    default: {
        "attrac": 0,
        "mental": 0,
        "educ": 0,
        "wealth": 0,
        "social": 0,
    }
});

const traumaAtom = atom({
    key: 'trauma',
    default: {
        "attrac": false,
        "mental": false,
        "educ": false,
        "wealth": false,
        "social": false,
    }
});
