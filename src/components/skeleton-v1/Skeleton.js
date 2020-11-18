import React from 'react';
import styles from './Skeleton.module.scss';

const SkeletonV1 = ({ circle }) => {
    const circleShapeClass = circle ? styles.wrapperCircle : '';

    return (
        <div className={`${styles.wrapper} ${circleShapeClass}`}>
            <div className={styles.skeleton}>
                <div className={styles.indicator} />
            </div>
        </div>
    );
};

export default SkeletonV1;
