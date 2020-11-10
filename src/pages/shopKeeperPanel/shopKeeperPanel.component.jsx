import React from "react";
import TileSection from "../../components/tile-section/tile-section.component";

import "./shopKeeperPanel.styles.scss";
import PanelData from "./shopKeeperPanel.data";

const ShopKeeperPanel = () => {
  return (
    <div className="containers">
      <TileSection sectionName="Shop Actions" ShopList={PanelData} />
    </div>
  );
};

export default ShopKeeperPanel;
