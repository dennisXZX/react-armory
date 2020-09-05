import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/facebook">Facebook</Link>
                </li>
                <li>
                    <Link to="/airbnb">Airbnb</Link>
                </li>
                <li>
                    <Link to="/hulu">Hulu</Link>
                </li>
            </ul>
        </div>
    );
};

export default Homepage;
