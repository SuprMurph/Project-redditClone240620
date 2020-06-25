import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Newscard from './components/NewsCard';
import MiniNav from './components/MiniNav';
import SubReddit from "./components/SubRedditPage/SubReddit";
import "./styles.css";





const App = () => {
  return (
    <React.Fragment className='mainPage'>
      <Navbar/>
      
      <div id='trendingToday'>
        <h4>Trending today:</h4>
      </div>

      <div className='newsCards'>
        <Newscard titleText="Trending Item 1" cardText="Here is some text about trending item 1"/>
        <Newscard titleText="Trending Item 2" cardText="Here is some text about trending item 2"/>
        <Newscard titleText="Trending Item 3" cardText="Here is some text about trending item 3"/>
        <Newscard titleText="Trending Item 4" cardText="Here is some text about trending item 4"/>
      </div>
      

      <div id='popPosts'>
        <h4>Popular posts</h4>
      </div>
      
      <MiniNav />
      <div className="App">
      <SubReddit />
    </div>

    </React.Fragment>
  );
}

export default App;
