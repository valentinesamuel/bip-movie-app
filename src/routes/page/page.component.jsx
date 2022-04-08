import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/movie-card/MovieCard.component";

const MoviePage = () => {
  const { pageNumber } = useLocation().state;
  
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/popular?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => setMovieList(data.data.results))
      .catch((error) => {
        console.log(error);
      })
     
  }, [pageNumber]);


  return (
    <div>
      <div className="movies">
        {movieList.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MoviePage;
