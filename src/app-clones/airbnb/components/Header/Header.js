import React from 'react';
import './Header.scss';
import logo from '../../assets/airbnb-logo.png'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from '@material-ui/core/Avatar';

const Header = () => {
    return (
        <div className="header">
            <img
                className="header__icon"
                src={logo}
                alt="Airbnb logo"
            />

            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    );
};

export default Header;
