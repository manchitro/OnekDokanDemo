import React from "react";
import Tile from "../../components/tile/tile.component";
import { Link } from "react-router-dom";
import "./tile-grid.styles.css";

const TileGrid = ({ shopList, link }) => {
  return (
    <div className="tile-grid">
      {shopList.map((shop) => {
        return (
          <Link className="link" to={link} key={shop.id}>
            <Tile key={shop.id} shop={shop} />
          </Link>
        );
      })}
    </div>
  );
};

export default TileGrid;
