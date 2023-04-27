//NOTE nice and funny use of the switch 🤩
const switchCategoryLogo = (category) => {
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
};

export default switchCategoryLogo;
