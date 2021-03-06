import React from 'react';
import RatingStar from '../../assets/rating-star.svg'

const MovieDetailView = ({ movieData }) => {
  console.log(movieData);
  return (
    <div className="movie-header">
      <div className="left-part">
        <div className="producer">
          <span className="bar"></span>
        </div>
        <span className="title">
          <h1>{movieData.title}</h1>
          <p>{movieData.adult && 'Adult Content'}</p>
        </span>
        <p className="genre">
          Genre:
          {movieData.genres.map(genre => { return <span>{genre.name}</span> })}</p>
        <p className="synopsis">
          {movieData.overview}
        </p>
        <p className="tagline">
          Tagline:  {movieData.tagline}
        </p>
        <p className='language'>Language : {movieData.spoken_languages.map(lang => <span>{lang.english_name}</span>)}</p>
        <p className='language'>Companies : {movieData.production_countries.map(proComp => <span className='company'>{proComp.name}</span>)}</p>
        <p className='language'>Released : {movieData.release_date}</p>
        <span className='rating'><img src={RatingStar} alt="rating-star" className='star'/> : {movieData.vote_average}</span>
      </div>
      <div className="right-part">
        <img src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`} alt="movie-poster" />
      </div>
    </div>
  )
}

export default MovieDetailView