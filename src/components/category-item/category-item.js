import React from "react";
import "./category-item.scss";

const CategoryItem = ({category}) => {
    const {name, obverseImageLink} = category;

    return (
        <li className="category__item">
            <h2 className="subtitle category__title">{name}</h2>
            <a className="category__link" href="#">
                Show all
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="&#208;&#161;&#209;&#130;&#209;&#128;&#208;&#181;&#208;&#187;&#208;&#186;&#208;&#176;" d="M1 10L5 5.5L1 1" stroke="#000"/>
                </svg>
            </a>
            <img className="category__img" src={obverseImageLink} alt="coin"/>
        </li>
    )
};

export default CategoryItem;