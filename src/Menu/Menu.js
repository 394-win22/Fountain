import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {make_user, signInWithGoogle, signOut} from "../database/users";

export const Menu = ({ open, uid, setUid }) => {
    return (
        <StyledMenu open={open}>
            <a href="/home">
                <span role="img" aria-label="price">&#x1f4b8;</span>
                Home
            </a>
            <a href={uid ? "/profile/"+uid : "/"}>
                <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                Profile
            </a>
            {uid ?
                <a href="#" onClick={ () => {
                    signOut().then(() => {
                        setUid("");
                    })
                }}>
                    <span role="img" aria-label="contact">&#x1f4e9;</span>
                    Logout
                </a> :
                <a href="#" onClick={ () => {
                    signInWithGoogle().then(([uid, email, name, photoUrl]) => {
                        setUid(uid)
                        make_user(uid, name, email, photoUrl);
                    })
                }}>
                    <span role="img" aria-label="contact">&#x1f4e9;</span>
                    Login
                </a>
            }
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
