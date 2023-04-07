import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';

function Shortcut(){
    return <div>
        <div className="shortcut">
            <h1>Shortcuts</h1>
        <div className="notify">
            <h1>Notify similar properties</h1>
        </div>
        <div className="key">
            <h1>Key Facts</h1>
        </div>
        <div className="history his">
            <h1>Property History</h1>
        </div>
        <div className="history demog">
            <h1>Demographics</h1>
        </div>
        <div className="history points">
            <h1>Points of interest</h1>
        </div>
        </div>
    </div>
}

export default Shortcut;