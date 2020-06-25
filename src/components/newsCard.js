import React from 'react';
import './NewsCard.css';

const newsCard = (props) => {
    return (
        <div className='cardWrapper'>
            <div className='cardBody' >
                <h2 id='cardTitle'>{props.titleText}</h2>
                <div id='cardText'>{props.cardText}</div>
            </div>
        </div>
    )
}

export default newsCard;

