import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
        </ul>
    );
};

export default Menu;
