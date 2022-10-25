import React from 'react';
import './_home.scss';
import HomeTop from './components/home-top';
import HomeBottom from './components/home-bottom';

const Home = () => {
    return (
        <div className='home-container'>
            <HomeTop/>
            <HomeBottom/>
        </div>
    )
};

export default Home;
