import {signInWithGoogle, signOut, make_user} from "../database/users";
import React from "react";
import {useNavigate} from 'react-router-dom';


export function SignInButton({ setUName }){
    const navigate = useNavigate();
    return (
    <div className="sign-in d-grid gap-3 col-3 p-2">
    <button type="button" className="btn btn-outline-dark" onClick={ () => {
        signInWithGoogle().then(([uid, email, name, photoUrl]) => {
            setUName(name);
            make_user(uid, name, email, photoUrl);
            navigate('/start');
        })
    }} >Login</button></div>
    )
}



export function SignOutButton({ setUEmail, setUName, setUid }){
    const navigate = useNavigate();
    return(
        <div className="sign-out d-grid gap-3 col-3 m-5">
    <button type="button" className="btn btn-outline-dark" onClick={ () => {
        signOut();
        setUEmail("");
        setUName("");
        navigate('/');
    }}>Logout</button></div>

    )

}
