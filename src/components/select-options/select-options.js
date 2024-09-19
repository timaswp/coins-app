import React from "react";

const SelectOption = ({specialName, label, options}) => {

    return (
        <div className="filter__option">
            <label className="label filter__label" htmlFor={specialName}>{label}</label>
            <select className="filter__select" name={specialName} id={specialName}>
                <Options options={options} />
            </select>
        </div>
    )
};

const Options = ({options}) => {
    return options.map(option => (
        <option value={option}>{option}</option>
    ))
};

export default SelectOption;