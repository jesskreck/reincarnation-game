import React from 'react'
import { useRecoilState } from 'recoil'

import { attracAtom } from '../../atoms/levelAtoms'
import { mentalAtom } from '../../atoms/levelAtoms'
import { educAtom } from '../../atoms/levelAtoms'
import { wealthAtom } from '../../atoms/levelAtoms'
import { socialAtom } from '../../atoms/levelAtoms'
import { willchainAtom } from '../../atoms/levelAtoms'
import { healedAtom } from '../../atoms/levelAtoms'
import { albumAtom } from '../../atoms/levelAtoms'
import { ageAtom } from '../../atoms/playerAtoms'
import { reincarnationAtom } from '../../atoms/playerAtoms'
import { progressAtom } from '../../atoms/playerAtoms'
import { traumaAtom } from '../../atoms/playerAtoms'
import { resourceUsage } from 'process'

const activePlayer = {
    name: 'Eve Nebular',
    avatar: "URL goes here",
    age: 20,
    reincarnation: 1,
    progress: {
        attrac: 60,
        mental: 70,
        educ: 20,
        wealth: 20,
        social: 10,
    },
    trauma: {
        attrac: false,
        mental: false,
        educ: false,
        wealth: true,
        social: false,
    }
}




export default function Dashboard() {

    const [attrac, setAttrac] = useRecoilState(attracAtom)
    const [mental, setMental] = useRecoilState(mentalAtom)
    const [educ, setEduc] = useRecoilState(educAtom)
    const [wealth, setWealth] = useRecoilState(wealthAtom)
    const [social, setSocial] = useRecoilState(socialAtom)
    const [willchain, setWillchain] = useRecoilState(willchainAtom)
    const [healed, setHealed] = useRecoilState(healedAtom)
    const [album, setAlbum] = useRecoilState(albumAtom)
    const [age, setAge] = useRecoilState(ageAtom)
    const [reincarnation, setReincarnation] = useRecoilState(reincarnationAtom)
    const [progress, setProgress] = useRecoilState(progressAtom)
    const [trauma, setTrauma] = useRecoilState(traumaAtom)


    //SECTION ACTION FUNCTIONS

    //SECTION PROGRESS FUNCTION
    const getWidth = (value) => {
        width: `${value}%`
    }

    const unhealedTraumas = () => {
        const emojis = [];
        if (trauma.attrac) {
            emojis.push("🤳")
        } else {
            emojis.push("◻️")
        };
        if (trauma.mental) {
            emojis.push("🤪")
        } else {
            emojis.push("◻️")
        };
        if (trauma.educ) {
            emojis.push("🎓")
        } else {
            emojis.push("◻️")
        };
        if (trauma.wealth) {
            emojis.push("💸")
        } else {
            emojis.push("◻️")
        };
        if (trauma.social) {
            emojis.push("💛")
        } else {
            emojis.push("◻️")
        };
        return emojis
    }


    //SECTION WILL FUNCTIONS


    //SECTION HEALING FUNCTIONS

    //SECTION WELLBEING FUNCTIONS
    const calculateWellbeing = (attrac, mental, educ, wealth, social) => {
        const stressLevel = 20;
        const powerLevel = 80;

        let sum = 0;
        let count = 0;

        const progresses = [attrac, mental, educ, wealth, social];

        for (const value of progresses) {
            const level = parseInt(levelStr);

            let weight = 1;
            if (level < stressLevel) {
                weight = 0.5;
            } else if (level > powerLevel) {
                weight = 2;
            }

            sum += level * weight;
            count += weight;
        }

        const wellbeing = Math.round(sum / count);
        return wellbeing;
    }



    return (

        <div className='game-bg-texture'>
            <div className='grid-game'>

                {/*SECTION ACTION PANEL STARTS HERE */}

                {/*SECTION PROGRESS PANEL STARTS HERE */}
                <div className="game-container-progress">
                    <div>
                        PlayerInfo Component goes here
                    </div>

                    <p>Attractiveness</p>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill" style={getWidth(attrac)}>
                            {`${attrac}%`}
                        </div>
                    </div>

                    <p>Mental Stability</p>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill" style={getWidth(mental)}>
                            {`${mental}%`}
                        </div>
                    </div>

                    <p>Educational Level</p>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill" style={getWidth(educ)}>
                            {`${educ}%`}
                        </div>
                    </div>

                    <p>Wealth</p>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill" style={getWidth(wealth)}>
                            {`${wealth}%`}
                        </div>
                    </div>

                    <p>Social Relationsships</p>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill" style={getWidth(social)}>
                            {`${social}%`}
                        </div>
                    </div>

                    //FIXME - change classname
                    <div className='game-manifest'>
                        {unhealedTraumas().map((emoji) => (
                            <div className="game-counter">
                                {emoji}
                            </div>
                        ))}
                    </div>
                </div>

                {/*SECTION WILL PANEL STARTS HERE */}

                

                {/*SECTION HEALING PANEL STARTS HERE */}
                //FIXME - change classname
                <div className="game-container-manifest">
                    <h3>Healing Love</h3>
                    {healed ? <p>💖</p> : <p>💔</p>}
                </div>

                
                
                {/*SECTION WELLBEING PANEL STARTS HERE */}
                <div className="game-container-wellbeing">
                    <h3>Wellbeing</h3>
                    <div className="progressbar-outline">
                        <div className="progressbar-fill">
                            {`${calculateWellbeing(attrac, mental, educ, wealth, social)}%`}
                        </div>
                    </div>
                </div>

                {/*SECTION ALBUM PANEL STARTS HERE */}

            </div>
        </div>
    )
}
