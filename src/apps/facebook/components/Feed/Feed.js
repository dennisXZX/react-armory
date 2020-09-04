import React from 'react';
import './Feed.scss';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';

const Feed = () => {
    const message='work';
    const timestamp = 'timestamp'
    const username = 'username'
    const profilePic='https://loremflickr.com/320/240'
    const image='https://loremflickr.com/320/240'

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic={profilePic}
                message={message}
                timestamp={timestamp}
                username={username}
                image={image}
            />
        </div>
    );
};

export default Feed;
