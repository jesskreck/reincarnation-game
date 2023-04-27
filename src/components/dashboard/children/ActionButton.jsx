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

  //NOTE this handler has the same name as the handleActionClick.js from your utils folder. Either modify this name, or remove the file from the utils folder.
  const handleActionClick = () => {
    setFirstVisit(false);
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
    // make player older
    setActivePlayer({ ...activePlayer, age: activePlayer.age + 10 });

    // update progress bar props according to action props
    function updateActivePlayer(prevPlayer) {
      // deconstructing progress in order to loop over it
      const progress = { ...prevPlayer.progress };
      console.log("ACTION progress :>> ", progress);
      console.log("ACTION action :>> ", action);

      for (const prop in action) {
        if (prop !== "text" && prop !== "category" && prop !== "subcategory") {
          progress[prop] += action[prop];
          if (progress[prop] < 0) {
            progress[prop] = 0;
            gameOver();
          }
          if (progress[prop] > 100) {
            progress[prop] = 100;
          }
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

  return (
    <>
      <button className={`${uniqueClassName}`} onClick={handleActionClick}>
        {action.text} {switchCategoryLogo(action.category)}
      </button>

      <Modal open={showModal}>{childModal}</Modal>
    </>
  );
};
