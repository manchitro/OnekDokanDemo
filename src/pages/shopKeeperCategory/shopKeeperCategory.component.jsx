import React from "react";
import "./shopKeeperCategory.styles.scss";
import CategoryList from "./shopKeeperCategory.data" 
import TileSection from "../../components/tile-section/tile-section.component";

const shopKeeperCategory= () => {
  return (
    <div className="containers">
      <TileSection link="product" sectionName="Your Categories" ShopList={CategoryList} />
    </div>
  );
};

export default shopKeeperCategory;
