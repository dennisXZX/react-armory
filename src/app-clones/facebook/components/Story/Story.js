import React from 'react';
import styles from './Story.module.scss'
import Avatar from '@material-ui/core/Avatar';

const Story = (props) => {
    const { image, profileSrc, title } = props;

    return (
        <div className={styles.story} style={{ backgroundImage: `url(${image})` }}>
            <Avatar src={profileSrc} className={styles.story__avatar} />
            <h4>{title}</h4>
        </div>
    );
};

export default Story;
