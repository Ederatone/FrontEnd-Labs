import React from "react";

function GoodsCard({ image, name, price }) {
    return (
        <div className="goods-card">
            <img src={image} alt={name} className="goods-image" />
            <h3>{name}</h3>
            <p>Cost: {price} grn</p>
        </div>
    );
}

export default GoodsCard;