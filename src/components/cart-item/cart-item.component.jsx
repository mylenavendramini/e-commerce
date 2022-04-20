import "./cart-item.styles.scss";

const CartItem = ({ CartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details"></div>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  );
};

export default CartItem;
