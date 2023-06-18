import React, { useContext, useEffect, useState } from "react";
import { ActionButton } from "../dashboard/children/ActionButton";
import { PlayerContext } from "../../contexts/PlayerContext";
import actionDataEN from "../../assets/gameData/actionDataEN.json";
import actionDataDE from "../../assets/gameData/actionDataDE.json";

import { LanguageContext } from "../../contexts/LanguageContext";
import texts from "../../assets/gameData/texts.json";

export default function PanelActions() {
  const { activePlayer } = useContext(PlayerContext);
  const [actionsOnScreen, setActionsOnScreen] = useState([]);
  const { language } = useContext(LanguageContext);

  // choose language json for 4 random action based on context
  const getRandomActions = () => {
    let actionData = [];

    if (language === "en") {
      actionData = actionDataEN;
    } else if (language === "de") {
      actionData = actionDataDE;
    }

    // old algorithm
    const shuffledActions = actionData.sort(() => Math.random() - 0.5);

    // new algorithm for picking random items from array
    // const shuffledActions = actionData.sort(() => {
    //     const now = new Date();
    //     const seed = now.getSeconds() + now.getMilliseconds() / 1000;
    //     return Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
    // });

    return shuffledActions.slice(0, 4);
  };

  // update actionsOnScreen everytime activePlayerState or language changes
  //TODO find new way on how to reload action items 
  //NOTE This state change below is triggered after an active player updates, which is made with a button click. You could trigger the function direcly in the onClick, avoind the creation of a useEffect (the less useEffects, the better)
  //NOTE on why to stick with useEffect here: New action items should only be loaded when modal is closed. Having the actionsOnScreen state on the actionButton component, would trigger to refresh the items when the modal is opened and when its clicked (?) 
  useEffect(() => {
    setActionsOnScreen(getRandomActions());
  }, [activePlayer, language]);
  //NOTE when putting arrays or objects in the dependecy array, we should check  not the whole object, but a property of it (like if the name changes,), otherwise the useEffect will interpret that as a new object everytime. Check more, and better explanation at the two thirds of this explanation : https://react.dev/learn/removing-effect-dependencies#does-some-reactive-value-change-unintentionally

  return (
    <div className="">
        <h5 className="white">
         Existential Escapades:
        </h5>
        <h2 className="white">
           10-Year Soul Takeover Plan
        </h2>

      <div className="space">
        {actionsOnScreen.map((action, index) => (
          <ActionButton
            key={index}
            action={action}
            uniqueClassName={`action-btn${index}`}
          />
        ))}
      </div>
    </div>
  );
}
