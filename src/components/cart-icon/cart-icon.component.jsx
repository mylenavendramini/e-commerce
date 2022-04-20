import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setisCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setisCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      {/*The actual number(0) which is the count of items we have so far:*/}
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
