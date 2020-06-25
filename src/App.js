import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';

const App = () => {
  return (
    <React.Fragment className='mainPage'>
      <Navbar/>
      <h1>Hello World!</h1>
    </React.Fragment>
  );
}

export default App;
