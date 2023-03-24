import React from 'react'

const ActionButtons = ({handleActionClick, actions, player, setPlayer, setActions, getRandomActions}) => {
    
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
  
    return (
    
      <div className="game__selection__panel">
        {actions.map((action, index) => (
          <button style={{fontSize: 'larger'}} key={index} onClick={() => handleActionClick(action, player, setPlayer, setActions, getRandomActions)}>
            {action.text} {CategoryLogo(action.category)}
          </button>
        ))}
      </div>
  )
}

export default ActionButtons