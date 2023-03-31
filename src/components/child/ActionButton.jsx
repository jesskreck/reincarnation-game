import React, { useContext, useState } from 'react'
import { PlayerContext } from '../../contexts/PlayerContext';
import Modal from '../modals/Modal';
import { ModalGeneratingPhoto } from '../modals/ModalGeneratingPhoto';


export const ActionButton = ({ action }) => {

  const { activePlayer, setActivePlayer } = useContext(PlayerContext)
  const [showModal, setShowModal] = useState(false)
  const [selectedAction, setSelectedAction] = useState(null)

  const CategoryLogo = (category) => {
    switch (category) {
      case "attractiveness":
        return "🤳";
      case "mental":
        return "🤪";
      case "education":
        return "🎓";
      case "wealth":
        return "💸";
      case "social":
        return "💛";
      default:
        return "";
    }
  }



  const handleActionClick = () => {

    setSelectedAction(action);
    setShowModal(true);

    console.log("click");
    console.log("action in handleclick", action);

    // make player older
    setActivePlayer({ ...activePlayer, age: activePlayer.age + 10 });

    // update progress bar props according to action props
    function updateActivePlayer(prevPlayer) {

      // deconstructing progress in order to loop over it 
      const progress = { ...prevPlayer.progress };

      for (const prop in action) {
        if (prop !== "text" && prop !== "category" && prop !== "subcategory") {
          progress[prop] += action[prop];
          if (progress[prop] < 0) {
            progress[prop] = 0;
            // ADD GAME OVER FUNCTION HERE!!!!!!!!!!!!!!!!
          }
          if (progress[prop] > 100) {
            progress[prop] = 100;
          }
        }
      }
      // since i'm passing prevPlayer in as an argument I also have to return the updated one!
      return {
        ...prevPlayer, progress
      }
    }
    setActivePlayer(updateActivePlayer);
  }


  return (
    <>
      <button style={{ fontSize: 'large' }} onClick={handleActionClick}>
        {action.text} {CategoryLogo(action.category)}
      </button>


      <Modal open={showModal} close={() => setShowModal(false)}>
        <ModalGeneratingPhoto action={selectedAction} setShowModal={setShowModal} /> 
      </Modal>
    </>
  )
}




