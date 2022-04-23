import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Movie } from '../components'
import  '../Styles/MovieList.css';
import {CustomPagination} from '../components';
function Trending() {

 const [content, setContent] = useState([]);
 const [numOfPages, setNumOfPages] = useState()
   const [isLoading, setIsLoading] = useState(false);
       const [page, setPage] = useState(1);
    const fetchTrending= async () =>{
      setIsLoading(true);
        const { data } = await axios.get(` https://api.themoviedb.org/3/trending/all/day?api_key=628422e76a4eac3150a9be2e93bde782&page=${ page }`);
        //  console.log(data);
          setContent(data.results);
          setIsLoading(false);
          setNumOfPages(data.total_pages);
    }
    useEffect(() => {
      fetchTrending();
       
    },[ page]);
   

    return (

      <>
      <span className="page-title">Trending Today</span>
        <div className="movie-list">

     
       
        {
          content.map((movie) => (
             <Movie movie= {movie} id={movie.id}
             isLoading={isLoading}
             media_type={movie.media_type}
             />


          ))
        }
       
        </div>
        <CustomPagination page={page} setPage={setPage} numOfPages={numOfPages}/>
        </>
    )
}

export default Trending

// https://api.themoviedb.org/3/trending/all/day?api_key=628422e76a4eac3150a9be2e93bde782&page=${ page }