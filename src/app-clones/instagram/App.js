import React from 'react';
import styles from './App.module.scss';
import logo from './assets/instagram_logo.webp';
import VideoCard from './components/Video/VideoCard';

const App = () => {
    return (
        <div className={styles.app}>
            <div className={styles.app__top}>
                <img
                    src={logo}
                    alt="Instagram logo"
                    className={styles.app__logo}
                />

                <h1>R_ee_ls</h1>
            </div>

            <div className={styles.app__videos}>
                <VideoCard
                    channel="music world"
                    avatarSrc = "{avatarSrc}"
                    song = "As long as you love me"
                    url = "https://www.w3schools.com/html/mov_bbb.mp4"
                    likes = "30"
                    shares = "20"
                />
            </div>
        </div>
    );
};

export default App;
