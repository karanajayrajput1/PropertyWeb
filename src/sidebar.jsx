import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';

function Sidebar(){
    return <div>
    <ul >
        <li className="side create">
            <h1 className="btn">Create New Tour   +</h1>
        </li>
        <li className="side dash">
            <h1 className="d1">Dashboard</h1>
        </li>
        <li className="side serach">
            <h1 className="d1">Search Property</h1>
        </li>
        <li className="side cal">
            <h1 className="d1">Calender</h1>
        </li>
        <li className="side clients">
            <h1 className="d1"> My Clients</h1>
        </li>
        <li className="side lists">
            <h1 className="d1">MLS Lists</h1>
        </li>
        <li className="side notification">
            <h1 className="d1">Notifications</h1>
        </li>
        <li className="side invite">
            <h1 className="d1">Invite & Earn</h1>
        </li>
    </ul>

    <h1 className="need">Need Help?</h1>
    <h2 className="help">Help Desk  </h2>
    </div>
}
export default Sidebar;