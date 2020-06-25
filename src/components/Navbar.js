import React from 'react';
import './Navbar.css';
import logo from '../images/redditLogo.png';
import logoText from '../images/reddittext.png';

const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <img id='roboLogo' src={logo} width='50px' height='50px' alt='reddit robot logo'/>
            <img id='logoText' src={logoText} width='100px' height='20px' alt='reddit robot logo'/>
            <input type='text' placeholder='Search'></input>
            <button id='login'>LOG IN</button>
            <button id='signup'>SIGN UP</button>
            <button id='rightDropDown'>needs an image</button>
        </div>
    )
}

export default Navbar;
