import React, { useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';
import requests from './utils/requests';

const App = () => {
    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

    return (
        <div className={styles.app}>
            <Header />
            <Nav setSelectedOption={setSelectedOption} />
            <Results selectedOption={selectedOption} />
        </div>
    );
};

export default App;
