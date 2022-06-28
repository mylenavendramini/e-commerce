import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 49.5px;
  left: 0;
  z-index: 4;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isBurgerOpen }) =>
    isBurgerOpen ? "translateX(0)" : "translateX(-100%)"};

  @media only screen and (max-width: 1000px) {
    width: 40%;
  }

  @media only screen and (max-width: 750px) {
    width: 70%;
  }

  a {
    font-size: inherit;
    text-transform: uppercase;
    padding: 2rem 1rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      border-bottom: 1px solid lightgrey;
    }
  }
`;
