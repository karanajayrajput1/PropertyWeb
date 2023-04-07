import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';

function Property(){
    return <div>
        <div className="property">
            <h1>Property Details</h1>
            <h2 className="app">Appartments</h2>
            <h2 className="bed3">3 Bedrooms</h2>
            <h2 className="bed2">2 Bathrooms</h2>
            <h2 className="gar">2 Garage</h2>
            <h2 className="room1">1,963 sq. ft.</h2>
            <h2 className="room2">1,176 sq. ft.</h2>
        </div>
    </div>
}

export default Property;