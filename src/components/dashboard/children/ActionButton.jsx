import React, { useContext, useEffect, useState } from "react";
import ModalGeneratingPhoto from "../../modals/ModalGeneratingPhoto";
import Modal from "../../modals/Modal";
import { PlayerContext } from "../../../contexts/PlayerContext";
import switchCategoryLogo from "../../../utils/switchCategoryLogo";
import ModalGameOver from "../../modals/ModalGameOver";
import { LevelContext } from "../../../contexts/LevelContext";

export const ActionButton = ({ action }) => {
  const { activePlayer, setActivePlayer } = useContext(PlayerContext);
  const { progress, setProgress, setWillChain, traumas } = useContext(LevelContext)


  const [showModal, setShowModal] = useState(false);
  const [childModal, setChildModal] = useState(null);

  //NOTE: this checks if the specific actions category matches the array of trauma strings. If yes, CSS class is added in the return
  
  const hasBreakPower = traumas.includes(action.category) && action.breaks;
  console.log('hasBreakPower, action :>> ', hasBreakPower, action);

  const handleActionClick = () => {
    console.log(hasBreakPower);
    setShowModal(true);
    setChildModal(
      <ModalGeneratingPhoto action={action} setShowModal={setShowModal} />
    );
  };

  const gameOver = () => {
    setTimeout(() => {
      setShowModal(true);
      setChildModal(<ModalGameOver setShowModal={setShowModal} />);
    }, 1500);
  };


  const handleUpdate = () => {
    updateProgress();
    setActivePlayer({ ...activePlayer, age: activePlayer.age + 10 });  
    }


  const updateProgress = () => {  
    const progressCache = { ...progress };
      for (const [prop, value] of Object.entries(action.progress)) {
        progressCache[prop] += value;

        if (progressCache[prop] < 0) {
          progressCache[prop] = 0;
          gameOver();
        }

        if (progressCache[prop] > 100) {
          progressCache[prop] = 100;
        }
      }
      setProgress(progressCache)
    }


  // useEffect(() => {
  //   if (!showModal) {
  //     handleUpdate();
  //   }
  // }, [showModal]);



  return (
    <>
      <div
        className="btn-action"
        onClick={handleActionClick}
      >

        <div className="big center">
          {switchCategoryLogo(action.category)} 
        </div>

        <p>
          {action.text}
        </p>

        <div className="center">
          {Object.entries(action.progress)
            .filter(([key, value]) => value !== 0)
            .map(([key, value]) => (
              <div>
                <span>{switchCategoryLogo(key)}</span>
                <span className={`game-progress-value ${value > 0 ? 'positive' : 'negative'} `}>{value}</span>
              </div>
            )
            )}
        </div>

      </div>

      <Modal open={showModal}>{childModal}</Modal>
    </>
  );
};
