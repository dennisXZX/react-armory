import React from 'react';
import styles from './Count.module.scss';

const Count = (props) => {
    const { count } = props;

    return (
        <div className={styles.count}>{count}</div>
    );
};

export default Count;
