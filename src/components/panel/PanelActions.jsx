import React, { useContext, useEffect, useState } from "react";
import { ActionButton } from "../dashboard/children/ActionButton";
import { PlayerContext } from "../../contexts/PlayerContext";

import { LanguageContext } from "../../contexts/LanguageContext";
import texts from "../../assets/gameData/texts.json";
import { getRandomActions } from "../../utils/getRandomActions";

export default function PanelActions() {
  const { activePlayer } = useContext(PlayerContext);
  const [actionsOnScreen, setActionsOnScreen] = useState([]);
  const { language } = useContext(LanguageContext);

  
  useEffect(() => {
    setActionsOnScreen(getRandomActions(language));
  }, [activePlayer, language]);

  return (
    <div className="game-container-actions game-bg">
        <h3 className="white">
         Existential Escapades:
        </h3>
        <h2 className="white">
           10-Year Soul Takeover Plan
        </h2>

        <div className="box">
          {actionsOnScreen.map((action, index) => (
            <ActionButton
              key={index}
              action={action}
            />
          ))}
        </div>
      
    </div>
  );
}
