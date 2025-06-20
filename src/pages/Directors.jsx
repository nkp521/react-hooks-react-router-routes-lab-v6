import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch((err) => console.log(err));
  }, []);

  const renderDirectors = () => {
    return directors.map((director) => (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, id) => (
            <li key={id}>{movie}</li>
          ))}
        </ul>
      </article>
    ));
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {renderDirectors()}
      </main>
    </>
  );
}

export default Directors;
