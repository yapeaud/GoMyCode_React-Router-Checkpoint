import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList";
import Description from "./Description";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import 'bootstrap/dist/css/bootstrap.min.css';

const moviesData = [
    { id: 1, title: "Inception", description: "Un thriller hallucinant", posterURL: "", rating: 4.7, trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0" },
    { id: 2, title: "Titanic", description: "Un drame romantique", posterURL: "", rating: 4.7, trailerURL: "https://www.youtube.com/embed/kVrqfYjkTdQ" },
    { id: 3, title: "The Dark Knight", description: "Batman affronte le Joker", posterURL: "", rating: 4.9, trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY" },
];

const App = () => {
    const [movies, setMovies] = useState(moviesData);
    const [filter, setFilter] = useState({ title: "", rating: 0 });

    const addMovie = (movie) => {
        setMovies([...movies, { ...movie, id: movies.length + 1, rating: Number(movie.rating) }]);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) && movie.rating >= filter.rating
    );

    return (
        <Router>
            <div className="container p-5">
                <h1 className="display-4 mb-4">Movie App</h1>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Filter setFilter={setFilter} />
                                <AddMovie addMovie={addMovie} />
                                <MovieList movies={filteredMovies} />
                            </>
                        }
                    />
                    <Route path="/movie/:id" element={<Description movies={movies} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
