import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {text: "Let's hit the beach!", iconName: "sun"},
    winter: {text: "Burr, it's chilly!", iconName: "snowflake"}
}

function getSeason(lat, month) {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplasy = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    const config = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`${config.iconName} icon-left icon massive`} />
            <h1>{config.text}</h1>
            <i className={`${config.iconName} icon-right icon massive`} />
        </div>
    );
};

export default SeasonDisplasy;