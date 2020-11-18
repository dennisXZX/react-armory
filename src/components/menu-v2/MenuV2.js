import React, { useEffect, useRef } from 'react';
import styles from './MenuV2.module.scss';

const MenuV2 = () => {
    const markerRef = useRef(null);

    useEffect(() => {
        const items = document.querySelectorAll('ul li a');

        const onMouseOverHandler = event => {
            markerRef.current.style.left = `${event.target.offsetLeft}px`;
            markerRef.current.style.width = `${event.target.offsetWidth}px`;
        };

        items.forEach(link => {
            link.addEventListener('mouseover', onMouseOverHandler);
        });

        // Remove all mousemove listeners
        return () => {
            items.forEach(link => {
                link.removeEventListener('mouseover', onMouseOverHandler);
            })
        }
    }, []);

    return (
        <ul className={styles.menu}>
            <div className={styles.marker} ref={markerRef}/>
            <li><a href="https://dennisxiao.com/">Home</a></li>
            <li><a href="https://dennisxiao.com/">Team</a></li>
            <li><a href="https://dennisxiao.com/">About</a></li>
            <li><a href="https://dennisxiao.com/">Services</a></li>
            <li><a href="https://dennisxiao.com/">Portfolio</a></li>
        </ul>
    );
};

export default MenuV2;
