import React , {useContext} from "react";
import CurrentPageContext from "../../../contexts/HeaderContext";
import "./nav-button.styles.css";

var shadow = {
  boxShadow: "1px 3px 1px #9E9E9E !imoprtant",
};

export const NavButton = (props) => {
  
  const { CurrentPage } = useContext(CurrentPageContext);
  
  return <div
    className={`${
      CurrentPage === props.buttonText ? "currentPage" : ""
    }  navbutton`}
    style={{ shadow }}
  >
    <button style={{ color: props.buttonColor }}>{props.buttonText}</button>
  </div>
}
