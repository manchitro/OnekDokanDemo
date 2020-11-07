import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import HeaderContext from "../../contexts/HeaderContext";
import "./cart-dropdown.styles.scss";

const Cart = ({ cartItems, history }) => {
  const { isCartHidden, setIsCartHidden } = useContext(HeaderContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Add Items to the Cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          setIsCartHidden(!isCartHidden);
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
