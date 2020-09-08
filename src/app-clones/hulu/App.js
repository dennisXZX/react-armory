import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
        </div>
    );
};

export default App;
