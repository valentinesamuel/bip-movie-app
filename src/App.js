import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/Logo.svg'
import Home from './components/home/home.component';
import Search from './routes/search/search.component';
import MovieDetail from './routes/movie-detail/MovieDetail.component';

function App() {
  return (<>
    <div className="navigation">
      <Link className="logo-container" to="/home">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/search">
          SEARCH
        </Link>
      </div>
    </div>
    <Routes>

      <Route path='/*' element={<Home />} />
      <Route path='/home/*' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/movie/*' element={<MovieDetail />} />




    </Routes>
  </>
  );
}

export default App;
