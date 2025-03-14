// export default Home;
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <>
            <section>
                <article className="row">
                    {movies.map((movie) => (
                        <div key={movie.id} className="col-md-4 mb-4">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </article>
            </section>
        </>
    );
};

export default MovieList;