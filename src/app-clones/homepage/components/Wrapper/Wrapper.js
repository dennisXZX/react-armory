import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = (props) => {
    const { bgColor, children } = props;

    return (
        <div className={styles.wrapper} style={{ backgroundColor: bgColor }}>
            {children}
        </div>
    );
};

export default Wrapper;
