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

        <div className='newsCards'>
          <Newscard titleText="Trending Item 1" cardText="Here is some text about trending item 1"/>
          <Newscard titleText="Trending Item 2" cardText="Here is some text about trending item 2"/>
          <Newscard titleText="Trending Item 3" cardText="Here is some text about trending item 3"/>
          <Newscard titleText="Trending Item 4" cardText="Here is some text about trending item 4"/>
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
