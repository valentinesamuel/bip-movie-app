import React, { useState } from "react";
import Star from "../../assets/rating-star.svg";
import MovieCard from "../../components/movie-card/MovieCard.component";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchList, setSearchList] = useState([]);

  const onChangeHandler = (event) => {
    setSearchString(event.target.value);
  };

  const fetchSearchMovies = () => {
    fetch(
      `https://movie-task.vercel.app/api/search?page=1&query=${searchString}`
    )
      .then((response) => response.json())
      .then((data) => setSearchList(data.data.results))
      .catch((error) => {
        setError(error);
      })
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
      <div className="movie-row">

      {searchList.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
      </div>
    </div>
  );
};

export default Search;
