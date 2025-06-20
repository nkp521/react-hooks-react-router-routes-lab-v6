import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
        {movie.genres.map((genre, id) => (
          <span key={id}>{genre}</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{!movie ? <h1>Loading...</h1> : renderMovieDetails()}</main>
    </>
  );
}

export default Movie;
