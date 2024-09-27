import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateQueryParams } from "../../actions";

const RangeOption = ({label, specialName, updateQueryParams, filters}) => {
    const min = `min${specialName.slice(0, 1).toUpperCase()}${specialName.slice(1)}`;
    const max = `max${specialName.slice(0, 1).toUpperCase()}${specialName.slice(1)}`;

    const [rangeMin, setRangeMin] = useState(filters[min] || 0);
    const [rangeMax, setRangeMax] = useState(filters[max]);

    useEffect(() => {
        setRangeMin(filters[min] || 0);
        setRangeMax(filters[max]);
        
    }, [filters[min], filters[max]]);

    const handleChangeMin = (e) => {
        setRangeMin(e.target.value);
        updateQueryParams(min, e.target.value);
    };

    const handleChangeMax = (e) => {
        setRangeMax(e.target.value);
        updateQueryParams(max, e.target.value);
    };

    return (
        <div className="filter__option">
            <label className="label filter__label">{label}</label>
            <div className="filter__inputs-container">
                <label className="filter__label_aside" htmlFor={`${specialName}_from`}>from</label>
                <input className="filter__input"
                    type="number"
                    min="0"
                    max="2100"
                    name={`${specialName}-from`}
                    id={`${specialName}-from`}
                    value={rangeMin}
                    onChange={handleChangeMin}/>
                <label className="filter__label_aside" htmlFor={`${specialName}_to`}>to</label>
                <input className="filter__input"
                    type="number"
                    min="0"
                    max="2100"
                    name={`${specialName}-to`}
                    id={`${specialName}-to`}
                    value={rangeMax}
                    onChange={handleChangeMax}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        filters: state.queryParams
    };
};

const mapDispatchToProps = {
    updateQueryParams
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeOption);