import { Badge } from '@material-ui/core';
import React from 'react'
import  { img_300, unavailable } from '../config/Config'
import  '../Styles/MovieCard.css'

 import ContentModel from '../components/ContentModel';
function MovieList({movie,isLoading, id, media_type}) {

    if(isLoading) return "Loading the Movies Please Wait";
    else if(movie){
        return (
            
            <ContentModel media_type={media_type} id={id}>
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
                            media_type==="tv"?"Tv Series" : "Movie"
                         }
                         </span>
                             <span className='subtitle'>
                         {
                            movie.release_date?movie.release_date : movie.first_air_date
                         }
                         </span>
                     </div>
                     
                 
            </ContentModel>
        )
    }
    else  return null;
   
}

export default MovieList
