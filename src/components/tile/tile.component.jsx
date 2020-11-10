import React from "react";
import { Link } from "react-router-dom";
import "./tile.styles.scss";

const Tile = ({ shop }) => {
  return (
    <>
      {shop.link ? (
        <Link className="link" to={shop.link}>
          <div className="tile">
            <img src={shop.imageLink} alt="image" />
            <span className="tileName">{shop.name}</span>
          </div>
        </Link>
      ) : (
        <div className="tile">
          <img src={shop.imageLink} alt="image" />
          <span className="tileName">{shop.name}</span>
        </div>
      )}
    </>
  );
};

export default Tile;
