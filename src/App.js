import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Newscard from './components/NewsCard';


const App = () => {
  return (
    <React.Fragment className='mainPage'>
      <Navbar/>
      
      <div id='trendingToday'>
        
        <h4>Trending today:</h4>

        <Newscard titleText="Here's a Title" cardText="Here is some text"/>
      </div>

    </React.Fragment>
  );
}

export default App;
