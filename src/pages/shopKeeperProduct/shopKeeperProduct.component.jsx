import React from "react";
import "./shopKeeperProduct.styles.scss";
import ProductList from "./shopKeeperProduct.data" 
import TileSection from "../../components/tile-section/tile-section.component";

const shopKeeperProduct = () => {
  return (
    <div className="containers">
      <TileSection sectionName="Your Products" ShopList={ProductList} />
    </div>
  );
};

export default shopKeeperProduct;
