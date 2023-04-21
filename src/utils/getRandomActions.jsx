import actionData from "../assets/gameData/actionData.json";

//NOTE this function gets exported but never used. See previous comment in handleActionClick()
export const getRandomActions = () => {
  const shuffledActions = actionData.sort(() => Math.random() - 0.5);

  return shuffledActions.slice(0, 5);
};
