import React from "react";
import switchCategoryLogo from "../../../utils/switchCategoryLogo";


export function Progress({
    attrac,
    mental,
    educ,
    wealth,
    social,
    unhealedTraumas,
    healingOnScreen,
}) {

    const progressbarClassName = (value) => {
        return `progressbar-fill ${value < 20 ? 'warning' : value > 80 ? 'success' : ''}`;
    }

    const getWidth = (value) => {
        return { width: `${value}%` }
    }


    return (
        <div className="container-progress">
            <h3>Attractiveness</h3>
            <div className="progressbar-outline">
                <div className={progressbarClassName(attrac)} style={getWidth(attrac)}>
                    {`🤳${attrac}`}
                </div>
            </div>
            <h3>Mental Stability</h3>
            <div className="progressbar-outline">
                <div className={progressbarClassName(mental)} style={getWidth(mental)}>
                    {`🤪${mental}`}
                </div>
            </div>
            <h3>Educational Level</h3>
            <div className="progressbar-outline">
                <div className={progressbarClassName(educ)} style={getWidth(educ)}>
                    {`🎓${educ}`}
                </div>
            </div>
            <h3>Wealth</h3>
            <div className="progressbar-outline">
                <div className={progressbarClassName(wealth)} style={getWidth(wealth)}>
                    {`💸${wealth}`}
                </div>
            </div>
            <h3>Social Relationships</h3>
            <div className="progressbar-outline">
                <div className={progressbarClassName(social)} style={getWidth(social)}>
                    {`💛${social}`}
                </div>
            </div>

            <h3 className='space'>Unhealed Traumas</h3>
            <div className="container-traumas">
                {unhealedTraumas.map((trauma, index) => <div className={`${healingOnScreen ? "healing" : ""}`} key={index}>{switchCategoryLogo(trauma)}</div>)}
            </div>
        </div>
    );
}
