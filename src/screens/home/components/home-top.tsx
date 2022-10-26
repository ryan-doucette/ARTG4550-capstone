import React from 'react';
import './styles/_home-top.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HomeTop = () => {
    const waveBorder = require('../images/wave-border.png');
    const mainIcon = require('../images/main-icon.png');
    const homeGraphicCenter = require('../images/home-graphic-center.png');
    const homeGraphicOuter = require('../images/home-graphic-outer.png')

    const scrollToBottom = () => {
        const homeContainerBottom = document.getElementById("homeContainerBottom");
        if(homeContainerBottom) {
            homeContainerBottom.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <div className='home-container-top'>
            <section className='home-left-container'>
                <img className='web-equity-icon' alt='WebEquity icon' src={mainIcon}/>   
                <h1 className='home-main-title'>WebEquity</h1>
                <h2 className='home-sub-title'>Website Accessibility Guide</h2>
                <section className='home-button-container'>
                    <button className='home-button'>
                        Why it should matter to you
                    </button>
                    <button className='home-button' onClick={scrollToBottom}>
                        Accessibility simulations
                    </button>
                    <KeyboardArrowDownIcon fontSize="large" className='down-arrow-icon' onClick={scrollToBottom}/>
                </section>
            </section>
            <img className='wave-border' src={waveBorder} alt='wave border seperator'/>
            <section className='home-right-container'>
                <div className='home-graphic-container'>
                    <img className='home-graphic' alt='home graphic' src={homeGraphicCenter}/>
                    <img className='home-graphic home-graphic-outer' alt='home graphic outline' src={homeGraphicOuter}/>
                </div>
            </section>
        </div>
    )
};

export default HomeTop;
