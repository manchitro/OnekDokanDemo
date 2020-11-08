import React from 'react'
import Tile from "../../components/tile/tile.component";
import "./tile-grid.styles.css";

const TileGrid = ({shopList}) => {
    return (
        <div className="tile-grid">
            {shopList.map((shop) => {
                return <Tile key={shop.id} shop={shop} />
            })}
        </div>
    )
}

export default TileGrid;
