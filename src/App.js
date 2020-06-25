import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import NewsCard from './components/NewsCard.js';

const App = () => {
  return (
    <React.Fragment className='mainPage'>
      <Navbar/>
      
      <div>
        <h4>Trending today:</h4>
      </div>
      
      <NewsCard titleText='blah blah blah' cardText='blabity blibbity blooblah'/>
    
    </React.Fragment>
  );
}

export default App;
