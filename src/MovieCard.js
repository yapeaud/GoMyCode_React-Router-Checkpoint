import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <>
            <section className="border p-4 rounded shadow">
                <img src={movie.posterURL} alt={movie.title} />
                <h2 className='text-lg mt-2'>{movie.title}</h2>
                <p>{movie.description}</p>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-2">Voir Détails</Link>
            </section>
        </>
    );
};

export default MovieCard;
