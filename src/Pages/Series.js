import React, { useEffect, useState } from 'react' //Series
import axios from 'axios'
import { Genres, Movie } from '../components'
import  '../Styles/MovieList.css';
import {CustomPagination} from '../components';
import useGenre from '../Hooks/useGenre';
function Series() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfPages, setNumOfPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL=useGenre(selectedGenres);
  const fetchMovies= async() => {
   
    setIsLoading(true);
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=628422e76a4eac3150a9be2e93bde782&language=te&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        // console.log(data);
          setContent(data.results);
          setNumOfPages(data.total_pages);
          setIsLoading(false);
  }

 useEffect(() => {
   fetchMovies();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[ page,genreforURL]);
 
   return (
    <>
    <span className="page-title">Series</span>
    <Genres
      type="tv"
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
           media_type="tv"
           />


        ))
      }
     
      </div>
      <CustomPagination page={page} setPage={setPage} numOfPages={numOfPages}/>
      </>
   )
}

export default Series
