import React from "react";
import { Link } from "react-router-dom";
import TileSection from "../../components/tile-section/tile-section.component";

import "./adminPanel.styles.scss";
import PanelData from "./adminPanel.data";

const AdminPanel = () => {
  return (
    <div className="containers">
      <TileSection link="/Admin%20Panel" sectionName="Featured Shops" ShopList={PanelData} />
    </div>
  );
};

export default AdminPanel;
