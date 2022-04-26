import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../components/context/categories.context";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/*If I dont use products &&, it will say that Im trying to call map of undefined, because we're trying to call category on an empty object (categoriesMap) when this app first mounts. Our categories-context fetches this data asynchronously, but when our application mounts for the first time, it's still trying to actually run this code synchronously. This is happening before we actually get these categories from our fire store. So having products && means say Hey, if products is undefined, then don't render it. Only render products.map if products has a value.*/}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
