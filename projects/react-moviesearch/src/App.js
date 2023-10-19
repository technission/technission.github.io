import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";


function App() {
  const [movies, setMovies] = useState([]);
  const API_SEARCH =
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results));
  }, []);
  

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.REACT_APP_LONG_API_KEY}`,
    },
  };

  return (
    <div className="App">
      <div className="search_nav">
        <div className="title">
          <h1>Movies</h1>
        </div>

        <div className="search_box">
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
