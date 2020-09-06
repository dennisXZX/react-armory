import React from 'react';
import './App.scss';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Homepage />
        </div>
    );
};

export default App;
