import React from 'react';
import './styles/_home-bottom.scss';
import { simulatorTiles } from '../simulator-tiles';

const HomeBottom = () => {
    return (
        <div className='home-container-bottom' id='homeContainerBottom'>
            <div className='accessibility-simulations-header'>
                <h2>Accessibility Simulations</h2>
            </div>
            <section className='accessibility-grid'>
                {simulatorTiles.map(sim => (
                    <button className='accessibility-simulator-container'>
                        <div className='accessibility-simulator-background'/>
                        <span className='accessibility-simulator-label'>{sim.name}</span>
                        <div className='accessibility-simulator-icon-container'>
                            <img className='accessibility-icon' alt={`${sim.name} icon`} src={sim.icon}/>
                        </div>
                    </button>
                ))}
            </section>
        </div>
    )
};

export default HomeBottom;
