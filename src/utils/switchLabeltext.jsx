const switchLabeltext = (label, language, texts) => {
    switch (label) {
        case "attractiveness":
            return `🤳 ${texts.main.progress1[language]}`;
        case "mental":
            return `🤪 ${texts.main.progress2[language]}`;
        case "education":
            return `🎓 ${texts.main.progress3[language]}`;
        case "wealth":
            return `💸 ${texts.main.progress4[language]}`;
        case "social":
            return `💛 ${texts.main.progress5[language]}`;
        default:
            return "";
    }
}

export default switchLabeltext