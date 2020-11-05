import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrentPageContext from "../../../contexts/HeaderContext";
import "./nav-button.styles.css";

var shadow = {
  boxShadow: "1px 3px 1px #9E9E9E !imoprtant",
};

export const NavButton = (props) => {
  const { currentPage } = useContext(CurrentPageContext);

  let history = useHistory();
  const redirect = () => {
    history.push(`/${props.buttonText === "Home" ? "" : props.buttonText}`);
  };

  return (
    <div
      className={`${
        currentPage === props.buttonText ? "currentPage" : ""
      }  navbutton`}
      style={{ shadow }}
    >
      <button style={{ color: props.buttonColor }} onClick={redirect}>{props.buttonText}</button>
    </div>
  );
};
