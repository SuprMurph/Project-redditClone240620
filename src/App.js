import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Newscard from './components/NewsCard';
import MiniNav from './components/MiniNav';
import SubReddit from "./components/SubRedditPage/SubReddit";
import "./styles.css";
import BlackBoard from "./images/blackBoard.jpg";
import CatsPictures from "./images/catsPicture.jpg";
import HobbsShaw from "./images/hobbsShaw.jpg";
import Protest from "./images/protest.jpg";


const App = () => {
  return (
    <React.Fragment className='mainPage'>
    <Navbar/>
      
    <div className='topOfPage'> 
      <div id='trendingToday'>
        <h4>Trending today:</h4>
      </div>

      <div className='newsCards'>
        <Newscard bgImg={HobbsShaw} titleText="Hobbs and Shaw" cardText="Why does the Fast and Furious fanchise need this?..."/>
        <Newscard bgImg={BlackBoard} titleText="Black Boards" cardText="Are Black boards making a comeback?..."/>
        <Newscard bgImg={CatsPictures} titleText="Cats: The Movie" cardText="Someone in Hoolywood thought they had a great idea..."/>
        <Newscard bgImg={Protest} titleText="Protests" cardText="People are protesting for multiple reasons across the world..."/>
      </div>
      
      <div id='popPosts'>
        <h4>Popular posts</h4>
      </div>
      
      <div className='miniNavWrapper'>
        <MiniNav />
      </div>
    </div>

    <div className="App">
      <SubReddit />
    </div>

    </React.Fragment>
  );
}

export default App;
