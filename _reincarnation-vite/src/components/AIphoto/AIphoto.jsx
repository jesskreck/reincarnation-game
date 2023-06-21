import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { attracAtom, educAtom, mentalAtom, socialAtom, statusAtom, wealthAtom } from '../../recoil/atoms/levelAtoms';
import switchCategoryLogo from '../../utils/switchCategoryLogo';



export const AIphoto = ({ action, player }) => {

    const [collected, setCollected] = useState([])

    const setStatus = useSetRecoilState(statusAtom)

    const setAtom = {
        attrac: useSetRecoilState(attracAtom),
        mental: useSetRecoilState(mentalAtom),
        educ: useSetRecoilState(educAtom),
        wealth: useSetRecoilState(wealthAtom),
        social: useSetRecoilState(socialAtom),
    }

    const handleKeyClick = (key) => {
        if (setAtom[key]) {
            setAtom[key]((oldValue) => {
                let newValue = oldValue + action.progress[key];
                if (newValue < 0) {
                    newValue = 0;
                    // setStatus("gameover")
                } else if (newValue > 100) {
                    newValue = 100;
                }
                return newValue;
            })
            setCollected((prevCollected) => [...prevCollected, key]);

        }
    };

    return (
        <div className='game-container-actions'>
            <h2>Look what you did!</h2>
            <p>You made {player} {action.text}.</p> 
            <p>Time to reap the rewards!</p>

            <div>
                {Object.entries(action.progress)
                    .filter(([key, value]) => value !== 0)
                    .map(([key, value]) => (
                        <div
                            key={key}
                            onClick={() => handleKeyClick(key)}
                            className={`big ${collected.includes(key) ? "hidden" : ""}`}
                        >
                            {switchCategoryLogo(key)}
                        </div>
                    ))}
            </div>
        </div>
    )
}
