import React from 'react';
import styles from './Wrapper.module.scss';

const Wrapper = (props) => {
    const { bgColor, children, direction } = props;

    const inlineStyle = {
        backgroundColor: bgColor,
        flexDirection: direction
    };

    return (
        <div
            className={styles.wrapper}
            style={inlineStyle}
        >
            {children}
        </div>
    );
};

export default Wrapper;
