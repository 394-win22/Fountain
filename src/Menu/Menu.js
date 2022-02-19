import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

export const Menu = ({ open, uid }) => {
  return (
    <StyledMenu open={open}>
        <a href="/home">
            <span role="img" aria-label="price">&#x1f4b8;</span>
            Home
        </a>
        <a href={uid ? "/profile/"+uid : "/home"}>
            <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
            Profile
        </a>
        <a href="/">
            <span role="img" aria-label="contact">&#x1f4e9;</span>
            Contact
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
