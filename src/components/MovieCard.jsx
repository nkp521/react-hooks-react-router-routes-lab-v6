import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title }) => {
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;
