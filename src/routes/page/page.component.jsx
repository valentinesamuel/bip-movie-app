import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/movie-card/MovieCard.component";

const MoviePage = () => {
  const { pageNumber } = useLocation().state;
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState("");

  //   useEffect(() => {
  //     fetch(`https://movie-task.vercel.app/api/popular?page=${pageNumber}`)
  //       .then((response) => response.json())
  //       .then((data) => setMovieList(data.data))
  //       .catch((error) => {
  //         setError(error);
  //       })
  //       .finally(setLoading(false));
  //   }, []);

  console.log(movieList.results);

  return (
    <div>
      {pageNumber}
      <div className="movies">
        
      </div>
    </div>
  );
};

export default MoviePage;
