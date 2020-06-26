import React from 'react'
import './MiniNav.css';

const MiniNav = () => {
    return (
        <div className='miniNavBody'>
            <button className='btn'id='hotBtn'>Hot</button>
            <button className='btn'id='ukBtn'>UK</button>
            <button className='btn'id='newBtn'>New</button>
            <button className='btn'id='topBtn'>Top </button>
            <button className='btn'id='settingsBtn'>...</button>
            <button className='btn'id='layoutBtn'>=</button>
        </div>
    )
}

export default MiniNav
