import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../components/context/user.context";
import { CartContext } from "../../components/context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  // I call the useContext on the UserContext, like I did in sign-in-form when I was pulling the setter functiom, but here I want the actual value of the currentUser
  // console.log(currentUser);
  // When I sign in with some user name, what should happen is that our sign-in-form sign in, gets the response, destruction as the user, stores it into our context. But then what should happen is that it should log from our navigation component. The fact that we logged it means that our functional component was re rendered and this is because useContext as a hook tells this component Oh, whenever a value inside of this context updates re render me.
  // So what's happening here is that because we're leveraging this currentUser value, we are saying, Oh, I want you to run my functional component again and re render me because this value inside of the userContext.jsx has updated and the reason why this triggers is because of useState (in userContext.jsx) being called with the setter function.
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          {/*<div>Logo</div>*/}
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {/* If theres an current user, I want to dont show sign-in anymore, but sign-out*/}
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      {/* This next Outlet is because of path index - element Home */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
