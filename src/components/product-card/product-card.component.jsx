import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  // const url = document.URL;
  // const strs = url.split("/");
  // const firstId = strs.at(-2);
  // const secondId = strs.at(-1);
  // const copyId = firstId + secondId;
  // console.log("ID:", firstId, secondId, copyId);

  // const test = product.id === 4;
  // const idTest = product.id;
  // console.log(product);
  // console.log(test);
  // console.log(idTest);
  // console.log(Object.keys(product));
  // console.log(Object.values(product));
  // const objEntriesCategories = Object.entries(product);
  // console.log("categories:", objEntriesCategories);

  // const mapping = objEntriesCategories.

  // const objEntriesCategoriesLengthId = objEntriesCategories[1];
  // console.log(objEntriesCategoriesLengthId);
  // const objEntriesCategoriesLengthKey = objEntriesCategoriesLengthId[0];
  // console.log(objEntriesCategoriesLengthKey);
  // const objEntriesCategoriesLengthValue = objEntriesCategoriesLengthId[1];
  // console.log("value:", objEntriesCategoriesLengthValue);

  // const valueOf = objEntriesCategories.indexOf("id");
  // console.log(valueOf);

  // const merge = [].concat.apply([], objEntriesCategories);
  // console.log(merge);
  // const indexOf = merge.indexOf(id);
  // console.log(indexOf);
  // const objEntriesCategoriesIndex = objEntriesCategories[-1];
  // console.log(objEntriesCategoriesIndex);

  // const productId = product.id;
  // console.log("productId", productId);
  // const matching = productId === objEntriesCategoriesLengthValue;

  // console.log("matching", matching);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <h2>{id}</h2>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to shopping bag
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </ProductCartContainer>
  );
};

export default ProductCard;
