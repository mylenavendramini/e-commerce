import { Fragment, useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import Suggestion from "../../components/suggestion/suggestion.component";

import {
  SearchContainer,
  SearchOpen,
  SearchClose,
} from "../../components/search/search-icon.styles";

import search from "../../assets/search-symbol.png";
import close from "../../assets/close.png";

import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";

import logo from "../../assets/MYSTORE-logo.png";
import contact from "../../assets/contact.png";

// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  ThreeItemsContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [isSearchSuggestionOpen, setIsSearchSuggestionOpen] = useState(false);

  const openSearchSuggestion = () => {
    setIsSearchSuggestionOpen(!isSearchSuggestionOpen);
  };

  // to close the search-suggestion when click outside:

  // const ref = useRef();
  // useOutsideClick(ref, () => {
  //   setIsSearchSuggestionOpen(false);
  // });

  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });

  // const ref = useRef();
  // useOnClickOutside(ref, () => setIsSearchSuggestionOpen(false));

  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100px",
            }}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">ALL</NavLink>
          <NavLink to="/shop/hats">HATS</NavLink>
          <NavLink to="/shop/bags">BAGS</NavLink>
          <NavLink to="/shop/sunglasses">SUNGLASSES</NavLink>
          <NavLink to="/shop/jackets">JACKETS</NavLink>
        </NavLinks>

        <ThreeItemsContainer>
          {/* If theres an current user, I want to dont show sign-in anymore, but sign-out*/}
          {currentUser ? (
            <span onClick={signOutUser}>SING OUT</span>
          ) : (
            <Link to="/auth">
              <img
                src={contact}
                alt="Contact"
                style={{
                  width: "20px",
                }}
              />
            </Link>
          )}

          <SearchContainer onClick={openSearchSuggestion}>
            {isSearchSuggestionOpen ? (
              <SearchClose
                src={close}
                alt="close"
                style={{
                  width: "20px",
                }}
              />
            ) : (
              <SearchOpen
                src={search}
                alt="search"
                style={{
                  width: "20px",
                }}
              />
            )}
          </SearchContainer>
          {isSearchSuggestionOpen && <Suggestion />}

          <CartIcon />
          {isCartOpen && <CartDropDown />}
        </ThreeItemsContainer>

        <div ref={node}>
          <Burger
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
          />
          <Menu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
        </div>
      </NavigationContainer>
      {/* This next Outlet is because of path index - element Home */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
