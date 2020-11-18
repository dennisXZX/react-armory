import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/hulu-white.png'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__icons}>
                <div className={styles.header__icon}>
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className={styles.header__icon}>
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className={styles.header__icon}>
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className={styles.header__icon}>
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className={styles.header__icon}>
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className={styles.header__icon}>
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>

            <img src={logo} alt="Hulu logo" />
        </div>
    );
};

export default Header;
