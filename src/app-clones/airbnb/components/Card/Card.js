import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    const { src, title, description, price } = props;

    return (
        <div className={styles.card}>
            <img src={src} alt="" />
            <div className={styles.card__info}>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default Card;
