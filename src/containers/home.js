import React, { useState, useEffect } from 'react';
import { Row, Col, Button, FormGroup } from 'reactstrap'
import Pagination from "react-js-pagination";
import MovieCard from './../components/movieCard';


const Home = (props) => {

  const [keyword, setKeyword] = useState('')
  const [movies, setMovies] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchMovies = async () => {
    if(keyword !== ''){
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${keyword}&page=${currentPage}`);
        const responseJSON = await response.json();
        setMovies(responseJSON);
      } catch (error){
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchMovies()
  },[currentPage])

  return (
    <div style={{width: '60%', marginLeft: '20%'}}>
      <Row style={{marginTop: '5rem'}}>
        <Col>
          <FormGroup>
            <input type="text" placeholder="Search" style={styles.serachInput} onChange={(event)=> setKeyword(event.target.value)} />
            <Button outline onClick={fetchMovies} type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
          </FormGroup>
        </Col>
      </Row>
      
        {movies !== null &&
          movies.Search.map((movie,index) => (
            <MovieCard {...movie} {...props} key={index} />
          ))
        }
        {
          movies !== null && Number(movies.totalResults) > 10 &&
            <Pagination
              prevPageText='prev'
              nextPageText='next'
              firstPageText='first'
              lastPageText='last'
              itemsCountPerPage={10}
              totalItemsCount={Number(movies.totalResults)}
              activePage={currentPage}
              pageRangeDisplayed={5}
              onChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
        }
    </div>
  )
}

export default Home;

const styles= {
  serachInput: {
    width: "30rem",
    borderRadius: 5,
    borderWidth: 'thin',
    height: '35px',
    marginRight: '5px'
  }
}