import React from "react";
import {useNavigate } from "react-router-dom";
import RatingStar from "../../assets/rating-star.svg";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const viewDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={viewDetails}>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="movie-poster"
        />
      </div>
      <p className="title">{movie.title}</p>
      <span className="btm-details">
        <h5>{movie.release_date.split("-")[0]}</h5>
        <div className="rank">
          <img src={RatingStar} alt="rating-star" />
          <p>{movie.vote_average}</p>
        </div>
      </span>

    
    </div>
  );
};

export default MovieCard;
