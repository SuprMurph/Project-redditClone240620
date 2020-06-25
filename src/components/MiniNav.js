import React from 'react'
import './MiniNav.css';

const MiniNav = () => {
    return (
        <div className='miniNavBody'>
            <button id='hotBtn'>Hot</button>
            <button id='ukBtn'>uk</button>
            <button id='newBtn'>new</button>
            <button id='topBtn'>top </button>
            <button id='settingsBtn'>...</button>
            <button id='layoutBtn'>Layout Icon</button>
        </div>
    )
}

export default MiniNav
