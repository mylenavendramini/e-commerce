import { useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

import { selectCategories } from "../../store/categories/categories.selector";

import React, { useState } from "react";

import {
  SuggestionContainer,
  CategoriesContainer,
  InputContainer,
  ItemDetails,
  Name,
  Price,
} from "./suggestion.styles";

const Suggestion = ({ title, products }) => {
  // const { cartItems } = useContext(CartContext);
  // const cartItems = useSelector(selectCartItems);
  const categoryItems = useSelector(selectCategories);
  //   const navigate = useNavigate();
  //   const goToCheckOutHandler = () => {
  //     navigate("/checkout");
  //   };
  const [searchTerm, setSearchTerm] = useState("");
  const categoryMap = categoryItems
    .map(({ items }) => items)
    .flat()
    .flat();

  return (
    <SuggestionContainer>
      <InputContainer>
        <input
          type="text"
          name="Search"
          id="searchInput"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </InputContainer>
      <CategoriesContainer>
        {categoryMap
          .filter((item) => {
            if (searchTerm === "") {
              return "";
            } else if (
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
            return "";
          })
          .map((item) => {
            return (
              <ItemDetails key={item.id}>
                <img src={item.imageUrl} alt={`${item.name}`} />

                <Name>{item.name}</Name>
                <br />
                <Price>${item.price}</Price>
              </ItemDetails>
            );
          })}
      </CategoriesContainer>

      {/*<div>
        {categories
          .filter((_, idx) => idx < 2)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </div>*/}
    </SuggestionContainer>
  );
};

export default Suggestion;
