
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Genres, Movie} from '../components'
import  '../Styles/MovieList.css';
import {CustomPagination} from '../components';
import useGenre from '../Hooks/useGenre';

function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfPages, setNumOfPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL=useGenre(selectedGenres);
  const fetchMovies= async() => {
   
    setIsLoading(true);
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=628422e76a4eac3150a9be2e93bde782&language=te&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
         // console.log(data);
          setContent(data.results);
          setNumOfPages(data.total_pages);
          setIsLoading(false);
  }

 useEffect(() => {
  window.scroll(0, 0);
   fetchMovies();
 },[page,genreforURL]);
 
   return (
    <>
    <span className="page-title">Movies</span>
      <Genres
      type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
         
      />
      <div className="movie-list">
      {
        content.map((movie) => (
           <Movie movie= {movie} id={movie.id}
           isLoading={isLoading}
            media_type="movie"
           />


        ))
      }
     
      </div>
      <CustomPagination page={page} setPage={setPage} numOfPages={numOfPages}/>
      </>
   )
}

export default Movies
