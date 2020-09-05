import React, { useEffect, useState } from 'react';
import './Feed.scss';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import { db } from '../../firebase/firebase';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    // `useEffect()` will be be run once
    useEffect(() => {
        // Fetch a database snapshot from Firestore
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
            // Map over all the documents in the `posts` collection
            const posts = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));

            // Map Firebase `posts` collection to component state
            setPosts(posts);
        })
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        profilePic={post.data.profilePic}
                        message={post.data.message}
                        timestamp={post.data.timestamp}
                        username={post.data.username}
                        image={post.data.image}
                    />
                ))
            }
        </div>
    );
};

export default Feed;
