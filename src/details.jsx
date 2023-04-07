import React from "react";
import ReactDOM from 'react-dom/client';


function Details(){
    return <div>
    <div className="details">
        <h1 className="key">
            Key Facts
        </h1>
        <h1 className="det">
            Details
        </h1>
        <h1 className="room">
            Rooms
        </h1>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.</p>
        <div className="table">
            <h1>
                <span className="right">Tax</span>
                <span className="left">$1,340 / 2022</span>
            </h1>
            <h1>
                <span className="right">Type</span>
                <span className="left">Single-Family</span>
            </h1>
            <h1>
                <span className="right">Building Age</span>
                <span className="left">5 Year</span>
            </h1>
            <h1>
                <span className="right">Size</span>
                <span className="left">1500 - 2000 feet2</span>
            </h1>
            <h1>
                <span className="right">Parking</span>
                <span className="left">Detached 2 Garage, 6 Parking</span>
            </h1>
            <h1>
                <span className="right">Basement</span>
                <span className="left">Unfinished</span>
            </h1>
            <h1>
                <span className="right">MLS#</span>
                <span className="left">E5579076</span>
            </h1>
            <h1>
                <span className="right">Possesion</span>
                <span className="left">5 Day</span>
            </h1>
            
        </div> 
        <h1 className="desc">
            Description
        </h1>
        <h2 className="description">
        Lorem ipsum dolor sit amet, consectetur adi
        piscing elit. Nunc commodo risus a mattis 
        semper. Integer placerat volutpat odio, at 
        pulvinar tortor laoreet mattis. Proin aliq
        uet semper tempus. Etiam auctor lacus leo 
        read more..
        </h2>
    </div>
    </div>
}

export default Details;