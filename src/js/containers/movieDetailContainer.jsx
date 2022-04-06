import React from "react";

// given movie object
const MovieDetailContainer = () => {
    return (
        <div className="movie">
            <div className="movie-poster-main">
                <img className="movie-poster-main" src={movie.Poster} />
            </div>

            <div className="card movie-details">
                <div className="card-header">
                    Movie Details
                </div>

                <div className="card-body">
                    <div>
                        <h4 className="card-title">{movie.Title}</h4>
                    </div>

                    <div>
                        <span>Released: {movie.Year}</span>
                        <span>{movie.Runtime}</span>
                        <span>{movie.Genre}</span>
                    </div>

                    <span>{movie.Plot}</span>
                    <span>Awards: {movie.Awards}</span>
                    <span>Actors: {movie.Actors}</span>
                    <span>MetaScore: {movie.Metascore}</span>
                    <span>IMDB: {movie.imdbRating}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailContainer;

const movie = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "Rated": "N/A",
    "Released": "08 Nov 2007",
    "Runtime": "40 min",
    "Genre": "Short, Action, Comedy",
    "Director": "Dario Russo",
    "Writer": "Dario Russo, David Ashby, Tait Wilson",
    "Actors": "David Ashby, Chris Asimos, Anna Cashman",
    "Plot": "When an otherworldly substance with amazing cloning properties falls into the hands of the evil criminal mastermind, Captain Maximum, only the extreme powers of the Italian Spiderman can save the world.",
    "Language": "English, Italian",
    "Country": "Australia",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      }
    ],
    "Metascore": "N/A",
    "imdbRating": "7.9",
    "imdbVotes": "1,018",
    "imdbID": "tt2705436",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }