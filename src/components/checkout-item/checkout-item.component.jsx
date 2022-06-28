import { useDispatch, useSelector } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import clearItem from "../../assets/delete.png";
import addItem from "../../assets/plus-symbol.png";
import removeItem from "../../assets/minus-symbol.png";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          <img
            src={removeItem}
            alt="removeItem"
            style={{
              width: "10px",
            }}
          />
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          <img
            src={addItem}
            alt="addItem"
            style={{
              width: "10px",
            }}
          />
        </Arrow>
      </Quantity>
      <RemoveButton onClick={clearItemHandler}>
        <img
          src={clearItem}
          alt="clearItem"
          style={{
            width: "15px",
          }}
        />
      </RemoveButton>

      <BaseSpan> ${price}</BaseSpan>
      {/*<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>*/}
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
