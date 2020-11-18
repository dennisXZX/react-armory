import React, { useState } from 'react';
import styles from './Banner.module.scss';
import Button from '@material-ui/core/Button';
import Datepicker from '../Datepicker/Datepicker';
import { useHistory, useRouteMatch } from "react-router-dom";

const Banner = () => {
    const browserHistory = useHistory();
    const { path } = useRouteMatch();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className={styles.banner}>
            {/* Search */}
            <div className={styles.banner__search}>
                {showSearch && <Datepicker />}

                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className={styles.banner__searchButton}
                    variant='outlined'
                >
                    {showSearch ? 'Hide' : 'Search Dates'}
                </Button>
            </div>

            {/* Banner Info */}
            <div className={styles.banner__info}>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button
                    variant='outlined'
                    onClick={() => browserHistory.push(`${path}search`)}
                >
                    Explore Nearby
                </Button>
            </div>
        </div>
    );
};

export default Banner;
