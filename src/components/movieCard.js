import React, { useEffect, useState } from 'react';
import {
  Row , Col, Button
} from 'reactstrap';


const MovieCard = ({
  Poster,
  Title,
  Year,
  imdbID,
  history
}) => {

  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchMovieRecord()
  },[])

  const fetchMovieRecord = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`);
      const responseJSON = await response.json();
      setMovie(responseJSON);
    }
    catch(error) {
      console.log(error);
    }
  }

  return (
    <Row style={{ width: '100%', height: '15rem',borderStyle: 'solid', borderWidth: 2, borderColor: '#b6b6b6', borderRadius: 10, marginTop: '10px', alignSelf: 'center'}}>
      <Col xs='4'>
        <img src={Poster} alt='movie-poster' style={{height: '14rem', paddingTop: '0.5rem'}} />
      </Col>
      <Col xs='8'>
        <p>
          <label>Title: </label>
          <label>{Title}</label>
        </p>
        <p>
          <label>Year: </label>
          <label>{Year}</label>
        </p>
        <p>
          <label>IMDB Rating: </label>
          <label>{movie.imdbRating}</label>
        </p>
        <Button onClick={()=> history.push({pathname:`/movie/${imdbID}`})}> More Details</Button>
      </Col>
    </Row>
  )
}

export default MovieCard;