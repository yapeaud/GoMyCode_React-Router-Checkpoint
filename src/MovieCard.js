import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <>
            <section className="border p-4 rounded shadow container">
                <article className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src={movie.posterURL}
                            alt={movie.title}
                            className="img-fluid rounded-1"
                        />
                        <h2 className="h5 mt-2">{movie.title}</h2>
                        <p>{movie.description}</p>
                        <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-2">
                            Voir Détails
                        </Link>
                    </div>
                </article>
            </section>
        </>
    );
};

export default MovieCard;
