import React from 'react';
import styles from './StoryReel.module.scss'
import Story from '../Story/Story';

const StoryReel = () => {
    return (
        <div className={styles.storyReel}>
            <Story
                image='https://loremflickr.com/320/240'
                profileSrc='https://loremflickr.com/320/240'
                title='Dennis Xiao'
            />
            <Story
                image='https://loremflickr.com/320/240'
                profileSrc='https://loremflickr.com/320/240'
                title='Dennis Xiao'
            />
            <Story
                image='https://loremflickr.com/320/240'
                profileSrc='https://loremflickr.com/320/240'
                title='Dennis Xiao'
            />
            <Story
                image='https://loremflickr.com/320/240'
                profileSrc='https://loremflickr.com/320/240'
                title='Dennis Xiao'
            />
            <Story
                image='https://loremflickr.com/320/240'
                profileSrc='https://loremflickr.com/320/240'
                title='Dennis Xiao'
            />
        </div>
    );
};

export default StoryReel;
