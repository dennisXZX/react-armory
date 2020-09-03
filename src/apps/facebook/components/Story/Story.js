import React from 'react';
import './Story.scss'
import Avatar from '@material-ui/core/Avatar';

const Story = (props) => {
    const { image, profileSrc, title } = props;

    return (
        <div className='story' style={{ backgroundImage: `url(${image})` }}>
            <Avatar src={profileSrc} className='story__avatar' />
            <h4>{title}</h4>
        </div>
    );
};

export default Story;
