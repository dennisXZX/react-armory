import React from 'react';
import styles from './App.module.scss';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Homepage />
        </div>
    );
};

export default App;
