import React from 'react';
import './Navbar.css';
import logo from '../images/Reddit-Logo-Horizontal.png';
import user from '../images/user.png';
import down from '../images/down-arrow.png';


const Navbar = () => {
    return (
        <div className='navbarWrapper'>
            <img src={logo} id='logo' alt='reddit logo'/>
            <input id='searchbar'type='search'  placeholder='Search'></input>
            <button id='login'>LOG IN</button>
            <button id='signup'>SIGN UP</button>
            <button id='rightDropDown'><img id='user' src={user}/><p id='spacer'> </p><img id='down' src={down}/></button>
            
        </div>
    )
}

export default Navbar;
