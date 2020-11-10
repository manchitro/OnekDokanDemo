import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import HeaderContext from "../../../contexts/HeaderContext";
import ProfileContext from "../../../contexts/ProfileContext";
import "./nav-button.styles.css";

var shadow = {
  boxShadow: "1px 3px 1px #9E9E9E !imoprtant",
};

export const NavButton = (props) => {
  const { currentPage } = useContext(HeaderContext);
  const { setIsUserLoggedIn, setIsUserAdmin, setIsUserShopKeeper } = useContext(
    ProfileContext
  );

  let history = useHistory();
  const redirect = () => {
    if (props.buttontext === "Admin Panel") {
      history.push(`/admin`);
    } else {
      history.push(`/${props.buttonText === "Home" ? "" : props.buttonText}`);
    }
  };

  const logout = () => {
    setIsUserLoggedIn(false);
    setIsUserShopKeeper(false);
    setIsUserAdmin(false);
    history.push("/login");
  };

  return (
    <div
      className={`${
        currentPage === props.buttonText ? "currentPage" : ""
      }  navbutton`}
      style={{ shadow }}
    >
      <button
        style={{ color: props.buttonColor }}
        onClick={props.buttonText === "Logout" ? logout : redirect}
      >
        {props.buttonText}
      </button>
    </div>
  );
};
