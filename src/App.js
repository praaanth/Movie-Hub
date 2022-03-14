import React from 'react';
import './App.css';
import {Header ,  MainNav} from './components';
import { Container } from '@material-ui/core';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import Search from './Pages/Search';
import Series from './Pages/Series';
import Movies from './Pages/Movies'; 
import Trending from './Pages/Trending'
function App() {
  return (

    <>
    
    <Header/>
    <Router>
    <div className="app">
    
    <Container>
   
    
    <Routes>

    <Route  path="/"  element={<Trending />}/>
    <Route  path="/movies" element={<Movies />}  />
    <Route  path="/series"  element={<Series />}/>
    <Route  path="/search" element={<Search />}/>








    </Routes>
     
    </Container>
    
    </div>
   
    <MainNav />
    </Router>
    
    </>
  );
}

export default App;
