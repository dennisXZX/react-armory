import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.scss';

const Facebook = () => {
    return (
        <div className="app">
            <Header />

            <div className="app__body">
                <Sidebar />
            </div>
        </div>
    );
};

export default Facebook;
