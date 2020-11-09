import React from "react";
import SectionTitle from "../../components/section-title/section-title.component";
import TileGrid from "../../components/tile-grid/tile-grid.component";
import "./tile-section.styles.css";

const TileSection = ({ sectionName, ShopList, link }) => {
  return (
    <div className="tile-section">
      <SectionTitle sectionTitle={sectionName} />
        <TileGrid link={link} shopList={ShopList} />
    </div>
  );
};

export default TileSection;
