import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};

  @media (max-width: 576px) {
    width: 100%;
    background: white;
  }

  a {
    font-size: 2rem;
    font-family:"Fredoka";
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FF1493;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #FFB6C1;
    }
  }
`;
