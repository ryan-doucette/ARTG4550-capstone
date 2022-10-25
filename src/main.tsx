import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/home';
import './_main.scss';

const Main = () => {
    return (
        <div className='main-container'>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    )
};

export default Main;
