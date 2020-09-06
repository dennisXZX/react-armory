import React from 'react';
import './Header.scss';
import logo from '../../assets/airbnb-logo.png'

const Header = () => {
    return (
        <div className="header">
            <img
                className="header__icon"
                src={logo}
                alt="Airbnb logo"
            />
        </div>
    );
};

export default Header;
