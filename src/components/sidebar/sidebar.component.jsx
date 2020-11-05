import React, { useContext } from "react";
import HeaderContext from "../../contexts/HeaderContext";
import { ProfileBanner } from "./profile-banner/profile-banner.component.jsx";

import "./sidebar.styles.css";

export const Sidebar = () => {
  const { sidebarVisibility } = useContext(HeaderContext);
  return (
    <div className={`sideBar ${sidebarVisibility ? "invisible" : "visible"}`}>
      <ProfileBanner />
    </div>
  );
};
