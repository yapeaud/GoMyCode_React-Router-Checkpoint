import React from "react";
import { useParams, Link } from "react-router-dom";

const Description = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <h2>Film introuvable</h2>;
    }

    return (
        <>
            <div className="container mt-5">
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <iframe
                    width="560"
                    height="315"
                    src={movie.trailerURL}
                    title={movie.title}
                    allowFullScreen
                ></iframe>
                <br />
                <Link to="/" className="btn btn-secondary mt-3">Retour à l'accueil</Link>
            </div></>
    );
};

export default Description;
