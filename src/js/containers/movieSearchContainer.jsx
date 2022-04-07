import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MovieSearchContainer = () => {
  const [movies, setData] = useState([]);

  const handleSearch = () => {
    const movieTitle = document.getElementById('movieTitle').value;
    
    fetch(`movieInfo/${movieTitle}`)
    .then( response => response.json())
    .then( data => {
      setData(data.Search);
    });
  }

  return (
    <div className="movie-list">
      <div className="banner">
        <div>
          <h2 className="fs-1">Movie Night</h2>
        </div>
      </div>

      <div className="input-group search-bar">
        <input type="text"
        id="movieTitle"
        className="form-control"/>
        <button className="btn btn-outline-primary"
        onClick={ handleSearch }>
          Search
        </button>
      </div>
        {   
            movies === undefined ?
            'No Movies found' :
            movies.map( movie => (
                <div className="movie-search-details m-1">
                    <div className="movie-poster-container">
                        <img className="movie-poster"
                        src={movie.Poster !== "N/A" ? movie.Poster
                        : 'https://www.hdstream.download/assets/general/images/no_poster.jpg'} />
                    </div>

                    <div className="search-details-container">
                        <div>
                            {movie.Title}
                        </div>
                        <div>
                            {movie.Year}
                        </div>
                        <div>
                            <Link to={`movie/${movie.imdbID}`}>
                              <button className="btn btn-primary">
                                Movie Details
                              </button>
                            </Link>
                        </div>
                    </div>

                </div>
            ))
        }

    </div>
  );
}

export default MovieSearchContainer;