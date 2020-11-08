import React from "react";
import "./tile.styles.scss";

const Tile = ({shop}) => {
  return (
    <div className="tile">
      <img src={shop.imageLink} alt="image" />
      <span className="tileName">{shop.name}</span>
    </div>
  );
};

export default Tile;
