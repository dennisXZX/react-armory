import React, { useEffect, useState } from 'react';
import styles from './Results.module.scss';
import VideoCard from '../VideoCard/VideoCard';
import axios from '../../utils/axios';

const Results = (props) => {
    const { selectedOption } = props;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(selectedOption);

            setMovies(request.data.results);
        };

        fetchData();
    }, [selectedOption]);

    return (
        <div className={styles.results}>
            {movies.map((movie) => (
                <VideoCard movie={movie} key={movie.id} />
            ))}
        </div>
    );
};

export default Results;
