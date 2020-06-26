import React from 'react';
import './DropDownColl.css';
import './DropDownItem';
import DropDownItem from './DropDownItem';

const DropDownColl = (props) => {
    return (
        <div>
            <ul>
                <DropDownItem itemText='POPULAR COMMUNITIES'/>
                <DropDownItem itemText='GAMING'/>
                <DropDownItem itemText='SPORTS'/>
                <DropDownItem itemText='TV'/>
                <DropDownItem itemText='TRAVEL'/>
                <DropDownItem itemText='HEALTH & FITNESS'/>
                <DropDownItem itemText='FASHION'/>
            </ul>
        </div>
    )
}

export default DropDownColl;
