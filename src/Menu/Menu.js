import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import {make_user, signInWithGoogle, signOut} from "../database/users";
import {useNavigate} from 'react-router-dom';

export const Menu = ({ open, uid, setUid }) => {
    return (
        <StyledMenu open={open}>
            <a href="/home">
                
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
                <a href="#" onClick={ () => {
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
