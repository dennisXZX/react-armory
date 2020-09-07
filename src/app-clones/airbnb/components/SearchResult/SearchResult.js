import React from 'react';
import styles from './SearchResult.module.scss';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = (props) => {
    const {
        img,
        location,
        title,
        description,
        star,
        price,
        total
    } = props;

    return (
        <div className={styles.searchResult}>
            <img src={img} alt="" />

            <FavoriteBorderIcon className={styles.searchResult__heart} />

            <div className={styles.searchResult__info}>
                <div className={styles.searchResult__infoTop}>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className={styles.searchResult__infoBottom}>
                    <div className={styles.searchResult__stars}>
                        <StarIcon className={styles.searchResult__star} />
                        <p><strong>{star}</strong></p>
                    </div>

                    <div className={styles.searchResults__price}>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
