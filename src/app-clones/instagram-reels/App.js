import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import logo from './assets/instagram_logo.webp';
import VideoCard from './components/Video/VideoCard';
import { db } from '../../firebase/firebase';

const App = () => {
    const [reels, setReels] = useState([]);

    useEffect(() => {
        db.collection('instagram-reels')
            .onSnapshot(snapshot => {
                setReels(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })));
            });
    }, []);

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
                {reels.map(({ id, data }) => (
                    <VideoCard
                        key={id}
                        channel={data.channel}
                        avatarSrc={data.avatarSrc}
                        song={data.song}
                        url={data.url}
                        likes={data.likes}
                        shares={data.shares}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
