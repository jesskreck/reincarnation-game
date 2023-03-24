import actionData from "../assets/gameData/actionData.json"


export const getRandomActions = () => {

    const shuffledActions = actionData.sort(
        () => Math.random() - 0.5
    );

    return shuffledActions.slice(0, 5);
}
