import { selector } from 'recoil';
import { calculateWellbeing } from '../../utils/calculateWellbeing';


import {
    attracAtom,
    mentalAtom,
    educAtom,
    wealthAtom,
    socialAtom,
} from '../atoms/levelAtoms';

export const wellbeingSelector = selector({
    key: 'wellbeing',
    get: ({ get }) => {
        const attrac = get(attracAtom);
        const mental = get(mentalAtom);
        const educ = get(educAtom);
        const wealth = get(wealthAtom);
        const social = get(socialAtom);

        return calculateWellbeing(attrac, mental, educ, wealth, social);
    },
});

