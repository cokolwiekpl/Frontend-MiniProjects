import React from "react";
export function User(props) {
    return (
        <>
            <h1>My name is {props.name}</h1>
            <p>I am a {props.expertise}.</p>
        </>
    )
}

export default User;