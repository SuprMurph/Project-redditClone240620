import React from 'react'

function DropDownItem() {
    return (
        <div>
            <li>
                <p id='text'>{props.itemText}</p> <p id='icon'>icon</p>
            </li>
        </div>
    )
}

export default DropDownItem
