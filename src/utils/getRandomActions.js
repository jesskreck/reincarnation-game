import actionDataEN from "../assets/gameData/actionDataEN.json";
import actionDataDE from "../assets/gameData/actionDataDE.json";

export const getRandomActions = (language) => {
  let actionData = [];

  if (language === "en") {
    actionData = actionDataEN;
  } else if (language === "de") {
    actionData = actionDataDE;
  }
  const shuffledActions = actionData.sort(() => Math.random() - 0.5);
  return shuffledActions.slice(0, 4);
};
