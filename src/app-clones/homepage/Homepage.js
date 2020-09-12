import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.scss';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <section className={styles.section}>
                <h1>App Clones</h1>

                <ul>
                    <li><Link to="/instagram">Instagram Reels</Link></li>
                    <li><Link to="/facebook">Facebook</Link></li>
                    <li><Link to="/airbnb">Airbnb</Link></li>
                    <li><Link to="/hulu">Hulu</Link></li>
                </ul>
            </section>

            <section className={styles.section}>
                <h1>Components</h1>

                <ul>
                    <li><Link to="/card-v1">Card v1</Link></li>
                    <li><Link to="/menu-v1">Menu v1</Link></li>
                </ul>
            </section>
        </div>
    );
};

export default Homepage;
