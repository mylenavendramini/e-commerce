import React from "react";
import { StyledMenu } from "./menu.styles";
import { bool } from "prop-types";

const Menu = ({ isBurgerOpen }) => {
  return (
    <StyledMenu isBurgerOpen={isBurgerOpen}>
      <a href="/shop">SALE</a>
      <a href="/shop/hats">HATS</a>
      <a href="/shop/bags">BAGS</a>
      <a href="/shop/sunglasses">SUNGLASSES</a>
      <a href="/shop/jackets">JACKETS</a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  isBurgerOpen: bool.isRequired,
};
export default Menu;
