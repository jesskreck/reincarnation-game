import React from 'react'

const ActionButton = ({ action, onClickHandler }) => {

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

    <button
      style={{ fontSize: 'large' }}
      onClick={() => onClickHandler(action)}
    >

      {/* Content of the button: */}
      {action.text} {CategoryLogo(action.category)}

    </button>

  )
}

export default ActionButton