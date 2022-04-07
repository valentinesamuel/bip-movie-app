import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MoviePage from "../../routes/page/page.component";
import "./home.styles.scss";

const Home = () => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(
    () => navigate(`page/${pageNumber}`, { state: { pageNumber: pageNumber } }),
    [pageNumber]
  );

  const nextPage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPageNumber((prevPage) => prevPage - 1);
  }; 

  return (
    <div>
      <h1>Home (Header)</h1>
      <Routes>
        <Route path={`page/${pageNumber}`} element={<MoviePage />} />
      </Routes>
      <div>
        <button onClick={previousPage} disabled={pageNumber <= 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Home;
