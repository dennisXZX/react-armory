import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

const Facebook = () => {
    return (
        <div className="app">
            <Header />

            <div className="app__body">
                <Sidebar />
                <Feed />
            </div>
        </div>
    );
};

export default Facebook;
