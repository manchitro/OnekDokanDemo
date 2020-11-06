import React, { useContext } from "react";

import { HamButton } from "./ham-button/ham-button.component";
import { Logo } from "./logo/logo.component";
import { SearchBox } from "./search-box/search-box.component.jsx";
import { SearchButton } from "./search-button/search-button.component";
import { NavButton } from "./nav-button/nav-button.component";

import ProfileContext from "../../contexts/ProfileContext";

import "./navigation.styles.css";

export const Navigation = () => {
  const { isUserLoggedIn } = useContext(ProfileContext);
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
    </div>
  );
};
