import React, { useContext } from "react";
import { LanguageContext } from "../../../contexts/LanguageContext";
import switchLabeltext from "../../../utils/switchLabeltext";
import texts from "../../../assets/gameData/texts.json";

export const ProgressInfo = ({ label, value }) => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="progress__container">
            <h6 className="progress__label">
                {switchLabeltext(label, language, texts)}: {`${value}%`}
            </h6>
        </div>
    );
};
