import { useDispatch, useSelector } from "react-redux";

// to close the cart-dropdown when click outside
import React, { useRef } from "react";
import useOutsideClick from "../clickOutside/useOutsideClick";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import shoppingBag from "../../assets/open-bag.png";

import {
  CartIconContainer,
  ItemCount,
  ShoppingContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  // to close the cart-dropdown when click outside:
  const ref = useRef();
  useOutsideClick(ref, () => {
    dispatch(setIsCartOpen(false));
  });

  return (
    <CartIconContainer onClick={toggleIsCartOpen} ref={ref}>
      <ShoppingContainer>
        <img
          src={shoppingBag}
          alt="shoppingBag"
          style={{
            width: "25px",
          }}
        />
      </ShoppingContainer>
      {/*The actual number(0) which is the count of items we have so far:*/}
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
