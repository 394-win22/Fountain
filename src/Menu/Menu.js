import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {make_user, signInWithGoogle, signOut} from "../database/users";

export const Menu = ({ open, uid, setUid }) => {
    return (
        <StyledMenu open={open}>
            <a href={uid ? "/start/" : "/"}>

                Home
            </a>
            <a href={uid ? "/profile/"+uid : "/"}>

                Profile
            </a>
            
            {uid ?
                <a href="/" onClick={ () => {
                    signOut().then(() => {
                        setUid("");
                    })
                }}>
                    Logout
                </a> :
                <a href="#top" onClick={ () => {
                    signInWithGoogle().then(([uid, email, name, photoUrl]) => {
                        setUid(uid)
                        make_user(uid, name, email, photoUrl);
                    })
                }}>
                    Login
                </a>
            }
        </StyledMenu>
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
