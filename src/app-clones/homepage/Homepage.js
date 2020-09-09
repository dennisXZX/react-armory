import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <h1>React Clones</h1>

            <ul>
                <li><Link to="/instagram">Instagram Reels</Link></li>
                <li><Link to="/facebook">Facebook</Link></li>
                <li><Link to="/airbnb">Airbnb</Link></li>
                <li><Link to="/hulu">Hulu</Link></li>
            </ul>
        </div>
    );
};

export default Homepage;
