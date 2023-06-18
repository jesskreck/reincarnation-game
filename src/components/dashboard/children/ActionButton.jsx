import React, { useContext, useEffect, useState } from "react";
import ModalGeneratingPhoto from "../../modals/ModalGeneratingPhoto";
import Modal from "../../modals/Modal";
import { PlayerContext } from "../../../contexts/PlayerContext";
import switchCategoryLogo from "../../../utils/switchCategoryLogo";
import ModalGameOver from "../../modals/ModalGameOver";

export const ActionButton = ({ action, uniqueClassName }) => {
  const { activePlayer, setActivePlayer } = useContext(PlayerContext);

  const [showModal, setShowModal] = useState(false);
  const [childModal, setChildModal] = useState(null);
  const [firstVisit, setFirstVisit] = useState(true);
  const [clickedCategory, setClickedCategory] = useState([])

  const handleActionClick = () => {
    setFirstVisit(false);
    setShowModal(true);
    setChildModal(
      <ModalGeneratingPhoto action={action} setShowModal={setShowModal} />
    );

    setClickedCategory([...clickedCategory, action.category])
  };

  const gameOver = () => {
    setTimeout(() => {
      setShowModal(true);
      setChildModal(<ModalGameOver setShowModal={setShowModal} />);
    }, 1500);
  };

  const handleUpdate = () => {
    // make player older
    setActivePlayer({ ...activePlayer, age: activePlayer.age + 10 });

    // update progress bar props according to action props
    function updateActivePlayer(prevPlayer) {
      // deconstructing progress in order to loop over it
      const progress = { ...prevPlayer.progress };
      console.log("ACTION progress :>> ", progress);
      console.log("ACTION action :>> ", action.progress);

      for (const prop in action.progress) {
        progress[prop] += action.progress[prop];
        if (progress[prop] < 0) {
          progress[prop] = 0;
          gameOver();
        }
        if (progress[prop] > 100) {
          progress[prop] = 100;
        }
      }
      // since i'm passing prevPlayer in as an argument I also have to return the updated one!
      return {
        ...prevPlayer,
        progress,
      };
    }
    setActivePlayer(updateActivePlayer);
  };

  useEffect(() => {
    if (!firstVisit && !showModal) {
      handleUpdate();
    }
  }, [showModal]);

  console.log('action :>> ', action);


  return (
    <>
      <div className={`game-info-counter ${uniqueClassName}`} onClick={handleActionClick}>
        <div className="action-grid">
          <div className="action-category">
            {switchCategoryLogo(action.category)}
          </div>
          <div className="action-text">
            {action.text}
          </div>
          <div className="action-progress">
            {Object.entries(action.progress)
              .filter(([key, value]) => value !== 0)
              .map(([key, value]) => (
                <div className="action-progress-info">
                  <span>{switchCategoryLogo(key)}</span>
                  <span className={`action-progress-element ${value > 0 ? 'positive' : 'negative'} `}>{value}</span>
                </div>
              )
              )}
          </div>
        </div>




      </div>

      <Modal open={showModal}>{childModal}</Modal>
    </>
  );
};
