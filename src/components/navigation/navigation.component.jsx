import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { HamButton } from "./ham-button/ham-button.component";
import { Logo } from "./logo/logo.component";
import { SearchBox } from "./search-box/search-box.component.jsx";
import { SearchButton } from "./search-button/search-button.component";
import { NavButton } from "./nav-button/nav-button.component";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import HeaderContext from "../../contexts/HeaderContext";


import ProfileContext from "../../contexts/ProfileContext";

import "./navigation.styles.css";

const Navigation = ({hidden}) => {
  const { isUserLoggedIn } = useContext(ProfileContext);
  const { isCartHidden } = useContext(HeaderContext);

  return (
    <div className="navigation">
      <HamButton />
      <Logo />
      <SearchBox />
      <SearchButton />
      <NavButton buttonText="Home" />
      <NavButton buttonText="Shops" />
      <NavButton buttonText="Account" />
      {isUserLoggedIn === true ? (
        <NavButton buttonText="Logout" buttonColor="red" />
      ) : (
        <NavButton buttonText="Login" buttonColor="green" />
      )}
      <CartIcon/>
      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navigation);