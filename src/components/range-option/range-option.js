import React from "react";

const RangeOption = ({label, specialName}) => {
    return (
        <div className="filter__option">
            <label className="label filter__label">{label}</label>
            <div className="filter__inputs-container">
                <label className="filter__label_aside" htmlFor={`${specialName}_from`}>from</label>
                <input className="filter__input" type="number" name={`${specialName}-from`} id={`${specialName}-from`}/>
                <label className="filter__label_aside" htmlFor={`${specialName}_to`}>to</label>
                <input className="filter__input" type="number" name={`${specialName}-to`} id={`${specialName}-to`}/>
            </div>
        </div>
    )
};

export default RangeOption;