import React, { useContext } from "react";

import "./ham-button.styles.css";

import HeaderContext from "../../../contexts/HeaderContext";

export const HamButton = () => {
  const { sidebarVisibility, setSidebarVisibility } = useContext(HeaderContext);
  return (
    <div
      className="sidebarbutton"
      onClick={() => setSidebarVisibility(!sidebarVisibility)}
    >
      <svg viewBox="0 0 100 80" width="30" height="30">
        <rect width="100" height="10" rx="6"></rect>
        <rect y="30" width="100" height="10" rx="6"></rect>
        <rect y="60" width="100" height="10" rx="6"></rect>
      </svg>
    </div>
  );
};
