import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieDetailView from "./movie-detail-view";

const MovieDetail = () => {
  const { pathname } = useLocation();
  const [movieDetail, setMovieDetail] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState([]);
  const movieId = pathname.split("/")[2];

  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/movie?movieId=${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovieDetail(data))
      .catch((error) => {
        setError(error);
      })
      .finally(setLoading(false));
  }, [movieId]);

  let testArr = Object.entries(movieDetail);
  console.log(testArr);
  return (
    <div className="detail-page">
      {testArr.map((detail) => (
        <MovieDetailView key={detail[1].id} movieData={detail[1]} />
      ))}
    </div>
  );
};

export default MovieDetail;
