import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Sale from './sale';
import Property from './property';
import Shortcut from './shortcut';
import Images from './images';
import Details from './details';
import './style.css';
import "./font/Gilroy-SemiBold.ttf";
import "./font/Gilroy-Medium.ttf";
function App(){
    return <div>
        <Navbar />
        <Images />
        <Sidebar />
        <Sale />
        <Property />
        <Details />
        <Shortcut />
    </div>
}

export default App;