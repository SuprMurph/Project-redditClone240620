import React from 'react'

const newsCard = (props) => {
    return (
        <div className='cardBody'>
            <h2>{props.titleText}</h2>
            <div>{props.cardText}</div>
        </div>
    )
}

export default newsCard;

