import styled from "styled-components";

export const StyledBurger = styled.button`
  display: none;

  @media only screen and (max-width: 1000px) {
    display: flex;
    position: absolute;
    top: 15px;
    left: 2rem;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    &:hover {
      transform: scale(1.1);
    }

    div {
      width: 26px;
      height: 2px;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isBurgerOpen }) =>
          isBurgerOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${({ isBurgerOpen }) => (isBurgerOpen ? "0" : "1")};
        transform: ${({ isBurgerOpen }) =>
          isBurgerOpen ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ isBurgerOpen }) =>
          isBurgerOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }
`;
