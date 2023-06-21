const switchCategoryLogo = (category) => {
  switch (category) {
    case "attrac":
      return "🤳";
    case "mental":
      return "🤪";
    case "educ":
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
