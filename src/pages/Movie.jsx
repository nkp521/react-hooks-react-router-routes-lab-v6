import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, [id]);

  const renderMovieDetails = () => {
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre, idx) => (
          <span key={idx}>{genre}</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{renderMovieDetails()}</main>
    </>
  );
}

export default Movie;
