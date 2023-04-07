import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';

function Sale(){
    return <div className="Saleback">
    <div className="salebtn"> <h1 className="sale">For Sale</h1></div>
    <div className="add">
        <h1>AddList</h1>
    </div>
    <div className="address">
        <h1>MLS#:E5579076</h1>
        <h3>Listed for: $1,549,586</h3>
        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624 </p>
    </div>
    <ul>
        <li className="salelist view">
            <h1 className="d2">View on Map</h1>
        </li>
        <li className="salelist direction">
            <h1 className="d2">Get Direction</h1>
        </li>
        <li className="salelist share">
            <h1 className="d2">Share</h1>
        </li>
        <li className="salelist notes">
            <h1 className="d2">My Notes</h1>
        </li>
    </ul>
    <div className="agent">
        <p>Listing Agent</p>
        <h2>Courtney Henry</h2>
        <h3>+90 552 489 8277</h3>
    </div>
    </div>
}

export default Sale;