import {signInWithGoogle, signOut, make_user} from "../database/users";
import React from "react";

export const SignInButton = ({ setUName }) => (
    <div className="d-grid gap-3 col-3 mx-auto p-2">
    <button type="button" className="btn btn-outline-dark" onClick={ () => {
        signInWithGoogle().then(([email, name]) => {
            setUName(name);
            make_user(name, email);
        })
    }} >Login</button></div>
)

export const SignOutButton = ({ setUEmail, setUName, setUid }) => (
    <div className="d-grid gap-3 col-3 mx-auto m-5">
    <button type="button" className="btn btn-outline-dark" onClick={ () => {
        signOut();
        setUEmail("");
        setUName("");
        setUid("");
    }}>Logout</button></div>
)