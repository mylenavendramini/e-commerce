import styled from "styled-components";

import { BaseButton } from "../button/button.styles";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  /* opacity: 0.9; */
  filter: contrast(80%);
  /* background-blend-mode: normal; */
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 80px;
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  /* border: 1px solid black; */
  /* background-color: white; */
  /* opacity: 0.7; */
  position: absolute;

  h1 {
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 100px;
    letter-spacing: 10px;
    line-height: 1px;
    font-size: 45px;
    color: white;
    text-transform: uppercase;
  }

  h2 {
    font-weight: bold;
    margin: 0 6px 70px 0px;
    font-size: 22px;
    letter-spacing: 2px;
    /* color: #4a4a4a; */
    color: white;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 80vh;
  /* flex: 1 1 auto; */
  display: flex;
  align-items: end;
  justify-content: center;
  /* border: 1px solid black; */
  /* margin: 0 7.5px 15px; */
  margin: 0;
  overflow: hidden;

  &:hover {
    /* cursor: pointer; */

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    /* margin-right: 7.5px; */
  }

  &:last-child {
    /* margin-left: 7.5px; */
  }

  ${BaseButton} {
    text-transform: none;
    position: absolute;
    margin-bottom: 30px;
  }
`;
