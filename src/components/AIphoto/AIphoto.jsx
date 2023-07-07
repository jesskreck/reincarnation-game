import { useEffect, useState } from 'react'
import { OpenAIApi, Configuration } from "openai"
import { useSetRecoilState } from 'recoil'
import { albumAtom, attracAtom, educAtom, healedAtom, mentalAtom, socialAtom, statusAtom, wealthAtom } from '../../recoil/atoms/levelAtoms';
import switchCategoryLogo from '../../utils/switchCategoryLogo';



export const AIphoto = ({ action, player, traumas }) => {

    // console.log(import.meta.env.MODE);
    // console.log(import.meta.env.OPENAI_API_KEY);

    const [collected, setCollected] = useState([])
    const [toBeCollected, setToBeCollected] = useState(1)
    const [AIphotoURL, setAIphotoURL] = useState(null)
    const [showHealing, setShowHealing] = useState(false)

    const setStatus = useSetRecoilState(statusAtom)
    const setAlbum = useSetRecoilState(albumAtom)
    const setHealed = useSetRecoilState(healedAtom)

    const setAtom = {
        attrac: useSetRecoilState(attracAtom),
        mental: useSetRecoilState(mentalAtom),
        educ: useSetRecoilState(educAtom),
        wealth: useSetRecoilState(wealthAtom),
        social: useSetRecoilState(socialAtom),
    }

    const aiBG = {
        backgroundImage: `url(${AIphotoURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const loadingBG = {
        // backgroundImage: `url(https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif)`,
        backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif)`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const calcToBeCollected = (action) => {
        let count = 1;

        if (traumas.includes(action.category) && action.healing) {
            count += 1;
        };
        count += Object.values(action.progress).filter((value) => value !== 0).length;
        setToBeCollected(count);
    };

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
            setToBeCollected((prev) => prev - 1);

        }
    };

    const handlePhotoClick = () => {
        setAlbum((prev) => [...prev, AIphotoURL])
        setCollected((prevCollected) => [...prevCollected, "📸"]);
        setToBeCollected((prev) => prev - 1);
    }

    const handleHealingClick = () => {
        setCollected((prevCollected) => [...prevCollected, "💖"]);
        setHealed(true);
        setToBeCollected((prev) => prev - 1);
    }



    const generateImage = async (player, action) => {
        // console.log("generating image deactived");
        const configuration = new Configuration({
            apiKey: import.meta.env.VITE_REACT_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);
        const res = await openai.createImage({
            prompt: `sharp photo of ${player.age} year old ${player.sex} who likes to ${action.text}, shot on Polaroid BigShot`,
            // prompt: `High-resolution photo of ${player.age} year old well-defined ${player.sex}, showing her ${action.text}.`,
            n: 1,
            size: "512x512",
        });
        console.log("res", res);
        setAIphotoURL(res.data.data[0].url);
    }

    useEffect(() => {
         generateImage(player, action);

        if (traumas.includes(action.category) && action.healing) {
            setShowHealing(true);
        };
        calcToBeCollected(action);

    }, [])

    useEffect(() => {
        if (toBeCollected === 0) {
            setStatus("action");
        } 
    }, [toBeCollected, setStatus]);










    
    return (
        <div
            style={AIphotoURL ? aiBG : loadingBG}
            className="photo-container"
        >
            {/* <h2>Look what you did!</h2>
            <p>
                You made {player.name} {action.text}.
            </p>
            <p>Time to reap the rewards!</p> */}

            <div className="container-rewards">
                {Object.entries(action.progress)
                    .filter(([key, value]) => value !== 0)
                    .map(([key, value]) => (
                        <div
                            key={key}
                            onClick={() => handleKeyClick(key)}
                            className={`btn-emoji ${collected.includes(key) ? "hidden" : ""}`}
                        >
                            {switchCategoryLogo(key)}
                        </div>
                    ))}
                <div
                    className={`btn-emoji ${collected.includes("📸") ? "hidden" : ""}`}
                    onClick={handlePhotoClick}
                >
                    📸
                </div>

                {showHealing && (
                    <div
                        className={`btn-emoji ${collected.includes("💖") ? "hidden" : ""}`}
                        onClick={handleHealingClick}
                    >
                        💖
                    </div>)}


            </div>
        </div>
    );
}
