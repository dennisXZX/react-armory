import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Nav />
        </div>
    );
};

export default App;
