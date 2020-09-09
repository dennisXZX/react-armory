import React, { useRef, useState } from 'react';
import styles from './VideoCard.module.scss';
import VideoHeader from '../VideoHeader/VideoHeader';
import VideoFooter from '../VideoFooter/VideoFooter';

const VideoCard = (props) => {
    const { url, likes, shares, channel, avatarSrc, song } = props;
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            // Stop the video
            videoRef.current.pause();

            setIsVideoPlaying(false);
        } else {
            // Play the video
            videoRef.current.play();

            setIsVideoPlaying(true);
        }
    };

    return (
        <div className={styles.videoCard}>
            <VideoHeader />

            <video
                ref={videoRef}
                onClick={onVideoPress}
                className={styles.videoCard__player}
                src={url}
                loop
            />

            <VideoFooter
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    );
};

export default VideoCard;
