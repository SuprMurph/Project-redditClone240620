import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <React.Fragment className='mainPage'>
      <h1>Hello World</h1>
      <Navbar/>
    </React.Fragment>
  );
}

export default App;
