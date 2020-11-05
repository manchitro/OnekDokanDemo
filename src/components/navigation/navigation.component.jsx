import React from "react";

import { HamButton } from "./ham-button/ham-button.component";
import { Logo } from "./logo/logo.component";
import { SearchBox } from "./search-box/search-box.component.jsx";
import { SearchButton } from "./search-button/search-button.component";
import { NavButton } from "./nav-button/nav-button.component";

import "./navigation.styles.css";

export const Navigation = () => (
  <div className="navigation">
    <HamButton />
    <Logo />
    <SearchBox />
    <SearchButton />
    <NavButton buttonText="Home"/>
    <NavButton buttonText="Shops"/>
    <NavButton buttonText="Account"/>
    <NavButton buttonText="Logout" buttonColor="red"/>
  </div>
);
