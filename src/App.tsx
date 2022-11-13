import React, { useState } from "react";

/*
  1. You can only use hooks inside of funcitonal components
  2. You cannot write hooks inside of conditional statements
**/

const App = () => {
  /*
    useState returns the current state which in this case
    is `movies` and a function that allows us to update 
    the state, `setMovies`. Typically named like so.
  **/

  const [movies, setMovies] = useState<Array<string>>([
    "The Godfather",
    "Harry Potter and the Chamber of Secrets",
    "Toy Story 1",
    "Gladiator",
  ]);

  const [newMovie, setNewMovie] = useState<string>("");

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setNewMovie(event.currentTarget.value);
  };

  const addNewMovie = (): void => {
    setMovies((movies) => [...movies, newMovie]);
    setNewMovie("");
  };

  return (
    <div>
      <h1>List of movies</h1>
      <input type="text" value={newMovie} onChange={onChange} />
      <button onClick={addNewMovie}>Add Movie</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
