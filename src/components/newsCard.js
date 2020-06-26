import React from 'react';
import './NewsCard.css';


const newsCard = (props) => {
    return (
        <div className='cardWrapper'>
            <div className='cardBody' style={{backgroundimage:(props.bgImg)}}>
                {/* <img src={props.bgImg} alt='background for the card'/> */}
                <div className='innerText'> 
                    <h2 id='cardTitle'>{props.titleText}</h2>
                    <div id='cardText'>{props.cardText}</div>
                </div>
            </div>
        </div>
    )
}

export default newsCard;

