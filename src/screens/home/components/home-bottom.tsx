import React from 'react';
import './styles/_home-bottom.scss';

const HomeBottom = () => {
    const accessibilitySimulators = ["Color Blindness", "Mobility", "Blindness", "Dyslexia", "Deafness + Blindness", "Deafness"];
    const blindnessIcon = require('../images/blindness.png');
    const deafnessIcon = require('../images/deafness.png');
    const dyslexiaIcon = require('../images/dyslexia.png');
    const colorBlindnessIcon = require('../images/color-blindness.png');
    const deafBlindIcon = require('../images/blind-deaf.png');
    const mobilityIcon = require('../images/mobility.png');

    return (
        <div className='home-container-bottom' id='homeContainerBottom'>
            <section className='accessibility-grid'>
                {accessibilitySimulators.map(sim => (
                    <div className='accessibility-simulator-container'>
                        <div className='accessibility-simulator-background'/>
                        <span className='accessibility-simulator-label'>{sim}</span>
                        <div className='accessibility-simulator-icon-container'>
                            <img className='accessibility-icon' src={colorBlindnessIcon}/>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
};

export default HomeBottom;
