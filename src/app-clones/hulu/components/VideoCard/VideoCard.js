import React from 'react';
import styles from './VideoCard.module.scss';
import { ThumbUpSharp } from '@material-ui/icons'

const BASE_MOVIE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const VideoCard = (props) => {
    const { movie } = props;

    return (
        <div className={styles.videoCard}>
            <img
                src={`${BASE_MOVIE_IMAGE_URL}${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
            />
            <p>{movie.overview.substring(0, 120)}...</p>
            <h2>{movie.title || movie.original_name}</h2>
            <p className={styles.videoCard__stats}>
                {movie.media_type && `${movie.media_type} - `}
                {`${movie.release_date || movie.first_air_date} - `}
                <ThumbUpSharp />{" "}
                {movie.vote_count}
            </p>
        </div>
    );
};

export default VideoCard;
