import React from 'react';
import styles from './Homepage.module.scss';
import Banner from '../Banner/Banner';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Banner />
        </div>
    );
};

export default Homepage;
