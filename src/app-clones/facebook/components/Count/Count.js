import React from 'react';
import './Count.scss';

const Count = (props) => {
    const { count } = props;

    return (
        <div className='count'>{count}</div>
    );
};

export default Count;
