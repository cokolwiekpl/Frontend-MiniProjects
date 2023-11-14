import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import User from "./User";
import Test from "./Test";
import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import {Routes, Route} from "react-router-dom";


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header/>
                        <Home/>
                    </>}
                />
                <Route path="/about" element={
                    <>
                        <Header/>
                        <About/>
                    </>
                }
                />
                <Route path="*" element={
                    <>
                        <ErrorPage/>
                    </>
                }
                />
            </Routes>

        </>
    )


    /*const [currentState, updatedState] = React.useState(false);
    useEffect(() => {
        window.alert("Button was clicked")
        }
    );

    return (
        <>
            <h1>Hello world</h1>
            <User/>
            <div>
                <button onClick={() => {
                    updatedState(!currentState)
                }}> Toggle
                </button>
                {currentState && <Test/>}
            </div>
        </>
    );*/
}

export default App;