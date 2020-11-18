import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/airbnb-logo.png';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to='/airbnb'>
                <img
                    className={styles.header__icon}
                    src={logo}
                    alt="Airbnb logo"
                />
            </Link>

            <div className={styles.header__center}>
                <input type="text" placeholder='Where are you going?' />
                <SearchIcon />
            </div>

            <div className={styles.header__right}>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    );
};

export default Header;
