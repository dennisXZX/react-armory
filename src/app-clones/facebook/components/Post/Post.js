import React from 'react';
import styles from './Post.module.scss'
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = (props) => {
    const { profilePic, image, username, timestamp, message } = props;

    return (
        <div className={styles.post}>
            <div className={styles.post__top}>
                <Avatar src={profilePic} className={styles.post__avatar} />

                <div className={styles.post__topInfo}>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className={styles.post__bottom}>
                <p>{message}</p>
            </div>

            <div className={styles.post__image}>
                <img src={image} alt="" />
            </div>

            <div className={styles.post__options}>
                <div className={styles.post__option}>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className={styles.post__option}>
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className={styles.post__option}>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className={styles.post__option}>
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    );
};

export default Post;
