import { ThemeProvider } from '@emotion/react';
import { Chip } from '@mui/material';
import { createTheme } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react'

// const darkTheme = createTheme({
//   palette: {
//     type: 'dark',
//   },
// });

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage

}) => {

  const fetchGenres= async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=628422e76a4eac3150a9be2e93bde782&language=en-US`);
     // console.log(data.genres);
    setGenres(data.genres);
  }
  // to add in the selectedGenres
  const handleClick = (genre) => {
      setSelectedGenres([...selectedGenres, genre]);
      setGenres(genres.filter(g => g.id !== genre.id));
      setPage(1);
  }
  // to delete from the selectedGenres
  const handleDelete = (genre) => {
    setSelectedGenres(selectedGenres.filter(g => g.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  }
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  

  return (
    
    <div className="genres" style={{padding:"6px 0"}}>
    
    <h1>Genres</h1>
    {
      selectedGenres.map(genre => (
        <Chip
        label={genre.name}
        color="primary"
              // size="small"
              style={{margin: "4px"}}
              clickable
              onDelete={() => handleDelete(genre)}
              />
      ))
    }
    
  
        {
          genres.map((genre) => (
            <Chip
              label={genre.name}
              key={genre.id}
              color="secondary"
              // size="small"
              style={{margin: "4px"}}
              clickable
               onClick={() => handleClick(genre)}
            />
          ))
        }
       
    </div>
  
  )
}

export default Genres