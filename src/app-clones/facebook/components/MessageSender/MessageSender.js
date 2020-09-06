import React, { useState } from 'react';
import './MessageSender.scss'
import Avatar from '@material-ui/core/Avatar';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../../store/StateProvider';
import { db } from '../../firebase/firebase';
import firebase from 'firebase';

const MessageSender = () => {
    const [{ user }] = useStateValue();
    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add the message to Firestore database
        await db.collection('fb-posts').add({
            message: message,
            image: imageUrl,
            profilePic: user.photoURL,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // use Firestore server time
        });

        // Reset both input fields
        setMessage('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />

                <form>
                    <input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        type="text"
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />

                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        type="text"
                        placeholder='image URL (Optional)'
                    />

                    <button
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
};

export default MessageSender;
