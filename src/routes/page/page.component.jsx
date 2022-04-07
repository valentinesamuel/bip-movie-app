import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MoviePage = () => {
  const { pageNumber } = useLocation().state;
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/popular?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => setMovieList(data.data))
      .catch((error) => {
        setError(error);
      })
      .finally(setLoading(false));
  }, []);

  console.log(movieList.results);

  return <div>{pageNumber}</div>;
};

export default MoviePage;
