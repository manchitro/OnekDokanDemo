import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import { ReactComponent as ShoppingIcon } from "./shopping-bag.svg";

import HeaderContext from "../../contexts/HeaderContext";

import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount }) => {
  const { isCartHidden, setIsCartHidden } = useContext(HeaderContext);
  return (
    <div className="cart-icon" onClick={() => setIsCartHidden(!isCartHidden)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
