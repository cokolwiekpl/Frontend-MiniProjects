import React from "react";
import {useNavigate} from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    return (
        <>
            <p>This is home page
            </p>
            <button onClick={() => {
                navigate("/about")
            }}>Go to about page
            </button>
        </>


    )

}

export default Home;