import React from "react";
import "./coins-list-item.scss"
import { Link } from "react-router-dom";

const CoinsListItem = ({coinData}) => {
    const {name, shortDescription, obverseImageLink, _id} = coinData;
    return (
        <Link to={`/coin/${_id}`} className="coins-list__link">
            <div className="coins-list__item">
                <img className="coins-list__item__img" alt="coin" src={obverseImageLink}/>
                <h2 className="coins-list__item__title">{name}</h2>
                <p className="coins-list__item__descr">{shortDescription}</p>
            </div>
        </Link>
    )
};

export default CoinsListItem;