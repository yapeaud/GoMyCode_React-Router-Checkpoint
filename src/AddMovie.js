import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
    const [newMovie, setMovie] = useState({ title: "", description: "", posterURL: "", rating: 0 });

    const handleChange = (e) => {
        setMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    return (
        <>
            <section className="mb-4">
                <div className="d-flex flex-wrap gap-3">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={handleChange}
                        className="form-control"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        className="form-control"
                    />
                    <input
                        type="text"
                        name="posterURL"
                        placeholder="URL de l'affiche"
                        onChange={handleChange}
                        className="form-control"
                    />
                    <input
                        type="number"
                        name="rating"
                        placeholder="Note"
                        onChange={handleChange}
                        className="form-control"
                    />
                    <button
                        onClick={() => addMovie(newMovie)}
                        className="btn btn-primary"
                    >
                        Add Movie
                    </button>
                </div>
            </section>
        </>
    );
};

export default AddMovie;