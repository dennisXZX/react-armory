import React, { useState } from 'react';
import styles from './Banner.module.scss';
import Button from '@material-ui/core/Button';

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className={styles.banner}>
            {/* Search */}
            <div className={styles.banner__search}>
                {showSearch && <h1>date picker</h1>}

                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className={styles.banner__searchButton}
                    variant='outlined'
                >
                    Search Dates
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
                    // onClick={() => history.push('/search')}
                >
                    Explore Nearby
                </Button>
            </div>
        </div>
    );
};

export default Banner;
