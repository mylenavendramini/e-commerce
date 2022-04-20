// import SHOP_DATA from "../../shop-data.json";
// instead of using like this, I want to get the data from firebase, so:
import { useContext } from "react";
import { ProductsContext } from "../../components/context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  //give me the products from useContext passing in the product context:
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
