import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {/* We need to map over some kind of array (cartItems) and for every item that we map through, we want to pass this to the cart item like so. */}
      {cartItems.map((item) => {
        <CartItem key={item.id} CartItem={item} />;
      })}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
