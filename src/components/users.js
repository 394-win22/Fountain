import {signInWithGoogle, signOut, make_user} from "../database/users";
import React from "react";
import {useNavigate} from 'react-router-dom';


export function SignInButton({ setUName }){
    const navigate = useNavigate();
    return (
    <div className="sign-in d-grid gap-3 col-3 p-2">
    <button type="button" className="btn btn-outline-dark" onClick={ () => {
        signInWithGoogle().then(([email, name]) => {
            setUName(name);
            make_user(name, email);
            navigate('/survey1');
        })
    }} >Login</button></div>
    )
}



export const SignOutButton = ({ setUEmail, setUName, setUid }) => (
    <div className="sign-in d-grid gap-3 col-3 m-5">
    <button type="button" className="btn btn-outline-dark" onClick={ () => {
        signOut();
        setUEmail("");
        setUName("");
        setUid("");
    }}>Logout</button></div>
)