import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 60px;
  padding: 10px 0px 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  top: 0;
  position: sticky;
  z-index: 1111;
  background-color: white;
  /* margin-bottom: 25px; */
`;

export const NavLinks = styled.div`
  /* width: 60%; */
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 1000px) {
    display: none;
  }

  @media only screen and (max-width: 750px) {
    background-color: lightblue;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 20px;
  cursor: pointer;
  letter-spacing: 2px;

  &:focus {
    color: white;
    background-color: var(--black-primary);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ThreeItemsContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    padding-left: 55%;
    padding-right: 0px;

    /* span {
      padding-right: 2px;
      padding-left: 2px;
    } */
  }

  @media only screen and (max-width: 750px) {
    padding-left: 25%;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding-top: 10px;

  @media only screen and (max-width: 1000px) {
    /* padding: 0px 0px 0px 700px; */
    padding-left: 10%;
    /* left: 40px; */
  }

  @media only screen and (max-width: 750px) {
    padding-left: 15%;
  }
`;
