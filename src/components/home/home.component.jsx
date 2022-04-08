import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MoviePage from "../../routes/page/page.component";

const Home = () => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(
    () => navigate(`page/${pageNumber}`, { state: { pageNumber: pageNumber } }),
    [pageNumber]
  );

  const onfetchMovies = ()=>{
    navigate(`page/${pageNumber}`, { state: { pageNumber: pageNumber } });
  }

  const nextPage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPageNumber((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <header>
        <div className="producer">
          <span className="bar"></span>
          <div className="text">Regency Enterprise</div>
        </div>
        <span className="title">
          <h1>Fight Club</h1>
          <p>Adult Content</p>
        </span>
        <p className="genre">
          Genre:
          <span>Action</span>
          <span>Drama</span>
          <span>Thriller</span>
        </p>
        <p className="synopsis">
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy. Their
          concept catches on, with underground "fight clubs" forming in every
          town, until an eccentric gets in the way and ignites an out-of-control
          spiral toward oblivion.
        </p>

        <div className="cta">
          <button className="watch-now" onClick={onfetchMovies}>
            Fetch Movies
          </button>
          <button disabled className="details">
            View Details
          </button>
        </div>
      </header>
      <Routes>
        <Route path={`page/${pageNumber}`} element={<MoviePage />} />
      </Routes>
      <div className="pagination">
        <button
          className="pager"
          onClick={previousPage}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <button className="pager" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
