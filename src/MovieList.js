// eslint-disable-next-line
import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const Home = ({ movies }) => {
    const [filter, setFilter] = useState({ title: "", rating: 0 });

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            movie.rating >= filter.rating
    );

    return (
        <>
            <section className="container p-4">
                <Filter setFilter={setFilter} />
                <MovieList movies={filteredMovies} />
            </section>
        </>
    );
};

export default Home;
