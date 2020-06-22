import React, { useState, useEffect } from 'react';

const MovieDetail = (props) => {

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchMovieRecord()
  },[])

  const fetchMovieRecord = async () => {
    try{
      const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${props.match.params.id}`);
      const responseJSON = await response.json();
      setMovie(responseJSON);
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{width: '60%', marginLeft: '20%',padding: '5rem', marginTop: '5rem',borderStyle:'solid', boderWidth: 2, borderRadius: 10, borderColor: '#b6b6b6'}}>
      <img src={movie.Poster} alt='movie-poster' style={{height: '20rem'}} />
      <p>
        <label>Title: </label>
        <label>{movie.Title}</label>
      </p>
      <p>
        <label>Year: </label>
        <label>{movie.Year}</label>
      </p>
      <p>
        <label>IMDB Rating: </label>
        <label>{movie.imdbRating}</label>
      </p>
      <p>
        <label>Runtime: </label>
        <label>{movie.Runtime}</label>
      </p>
      <p>
        <label>IMDB Votes: </label>
        <label>{movie.imdbVotes}</label>
      </p>
      <p>
        <label>Actors: </label>
        <label>{movie.Actors}</label>
      </p>
    </div>
  )
}

export default MovieDetail;