import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import User from "./User";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root"));


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header";
import User from "./User";

const main = {
    backgroundColor: "green",
    height: "100px"
}

const fistvar = "Expert";
const secondvar = "Developer";

ReactDOM.render(
    <>






         <Header/>
        <User name="John" expertise="front-end"/>
        <User name="Stas" expertise="Back-end"/>
        <User name="Tom" expertise="soft"/>
        <User name="Ann" expertise="menago"/>

        <div style={{backgroundColor: "black", height: "100px"}}>
            <h5 style={{color: "red"}}>Hello world</h5>
            <h5 style={main}>Hello there</h5>
        </div>
        <div>
            <h5>Hello i am {fistvar}</h5>
            <h5>Hello i am {secondvar}</h5>
        </div>
    </>
    ,
    document.getElementById('root')
);
*/
