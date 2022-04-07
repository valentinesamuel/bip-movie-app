import React, { useState } from "react";

import MovieCard from "../../components/movie-card/MovieCard.component";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchList, setSearchList] = useState([]);

  const onChangeHandler = (event) => {
    setSearchString(event.target.value);
  };

  const fetchSearchMovies = () => {
    setLoading(true);
    fetch(
      `https://movie-task.vercel.app/api/search?page=1&query=${searchString}`
    )
      .then((response) => response.json())
      .then((data) => setSearchList(data.data.results))
      .finally(setLoading(false));
  };
  console.log(searchList);

  return (
    <div>
      <input
        className="input"
        type="search"
        placeholder="Search movie title here"
        onChange={onChangeHandler}
      />
      <button className="btn" onClick={fetchSearchMovies}>
        Search
      </button>
      {loading ? (
        <p className="loading">Loading</p>
      ) : (
        <div className="movie-row">
          {searchList.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
