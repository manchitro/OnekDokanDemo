import React from "react";
import { Link } from "react-router-dom";
import TileSection from "../../components/tile-section/tile-section.component";

import "./homePage.styles.scss";
import ShopList from "./homePage.data";

const HomePage = () => {
  return (
    <div className="containers">
      <TileSection link="/shops" sectionName="Featured Shops" ShopList={ShopList} />
    </div>
  );
};

export default HomePage;
