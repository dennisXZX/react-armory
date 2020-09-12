import React from 'react';
import styles from './Cards.module.scss';
import Card from './Card';

const Cards = () => {
    return (
        <section className={styles['card-list']}>
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    );
};

export default Cards;
