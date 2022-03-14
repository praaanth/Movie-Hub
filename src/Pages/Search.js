import React,{useEffect, useState} from 'react'
import {  createMuiTheme, TextField, ThemeProvider,
Button,
Tab,Tabs } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import { CustomPagination } from '../components';
import {  Movie} from '../components'


const darkTheme= createMuiTheme({
  palette: {
    type:'dark',
    primary : {
      main: "#fff",
    },
  }
})



function Search() {
  const [type, setType] = useState(0)
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfPages, setNumOfPages] = useState(1);
  const [searchText, setSearchText] = useState("")
  const fetchSeries= async() => {
   
    setIsLoading(true);
       try{
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=628422e76a4eac3150a9be2e93bde782&language=en-US&query=${searchText}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
        console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
        setIsLoading(false);
       }
       catch (e) {console.log(e);}
      
  }

 useEffect(() => {
  window.scroll(0, 0);
   fetchSeries();
 },[page,type]);
  return (
   <>
   
   <ThemeProvider theme={darkTheme}>
   <div style={{display: 'flex',margin:'10px 0'}}>
    <TextField 
    style={{flex:1, color: 'primary'}}
      required
      label="Search"
      type="search"
      variant="outlined"

      onChange={(e)=> { setSearchText(e.target.value)}}
    />
    <Button variant="contained" style={{marginLeft:10}}> <SearchIcon style={{height:40,paddingBottom:4}}
    onClick={fetchSeries}> </SearchIcon> </Button>
  
</div>
<div>
   <Tabs indicatorColor="primary"
    textColor="primary" value={type}
    onChange={(e,newValue)=> {
      setType(newValue);
      setPage(1);
    }}>
    <Tab label="Search Movies" style={{width:'50%'}}/>
    <Tab label="Search Series" style={{width:'50%'}}/>
    </Tabs>
    </div>
    </ThemeProvider>
    <div className="movie-list">
      {
        content.map((movie) => (
           <Movie movie= {movie} id={movie.id}
           isLoading={isLoading}
           />


        ))
      }
     
      </div>

      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}



   </>
  )
}

export default Search
