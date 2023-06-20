import { atom } from 'recoil';

const attracAtom = atom({
    key: 'attrac',
    default: 0
});

const mentalAtom = atom({
    key: 'mental',
    default: 0
});

const educAtom = atom({
    key: 'educ',
    default: 0
});

const wealthAtom = atom({
    key: 'wealth',
    default: 0
});

const socialAtom = atom({
    key: 'social',
    default: 0
});

const willchainAtom = atom({
    key: 'willchain',
    default: ["⚪️","⚪️","⚪️"]
});

const healedAtom = atom({
    key: 'healed',
    default: false
});

const albumAtom = atom({
    key: 'album',
    default: []
});
