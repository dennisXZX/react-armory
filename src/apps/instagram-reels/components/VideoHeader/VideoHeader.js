import React from 'react';
import styles from './VideoHeader.module.scss';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

const VideoHeader = () => {
    return (
        <div className={styles.videoHeader}>
            <ArrowBackIosIcon />
            <h3>Reels</h3>
            <CameraAltOutlinedIcon />
        </div>
    );
};

export default VideoHeader;
