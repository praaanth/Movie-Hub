import { Badge } from '@material-ui/core';
import React from 'react'
import  { img_300, unavailable } from '../config/Config'
import  '../Styles/MovieCard.css'
function MovieList({movie,isLoading, id}) {

    if(isLoading) return "Loading the Movies Please Wait";
    else if(movie){
        return (
            
            <div className="movie-card">
            <Badge badgeContent={movie.vote_average}
                color={movie.vote_average>6.5 ?'primary' : 'secondary'}
            />
                <img className ="poster" src={movie.poster_path ?`${img_300}/${movie.poster_path}`
                : unavailable} 
                alt={"movie.title" || "movie.name"} />
                 <div className='title'>
                     {movie.title || movie.name}
                     </div>
                     <div className='sub-title'>

                     <span >
                         {
                            movie.name?"Tv Series" : "Movie"
                         }
                         </span>
                             <span className='subtitle'>
                         {
                            movie.release_date?movie.release_date : movie.first_air_date
                         }
                         </span>
                     </div>
                     
                 
            </div>
        )
    }
    else  return null;
   
}

export default MovieList
