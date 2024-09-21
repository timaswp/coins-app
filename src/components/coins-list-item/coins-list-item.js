import React from "react";
import "./coins-list-item.scss"

const CoinsListItem = () => {
    return (
        <div className="coins-list__item">
            <img className="coins-list__item__img" alt="coin"/>
            <h2 className="coins-list__item__title">Coin Name</h2>
            <p className="coins-list__item__descr">"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
        </div>
    )
};

export default CoinsListItem;