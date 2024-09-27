import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateQueryParams } from "../../actions";

const SelectOption = ({specialName, label, options, updateQueryParams, filters}) => {
    const [opt, setOpt] = useState(filters[specialName] || options[0]);

    useEffect(() => {
        setOpt(filters[specialName] || '');
    }, [filters[specialName]]);

    const handleChange = (e) => {
        setOpt(e.target.value);
        updateQueryParams(specialName, e.target.value);
    };

    return (
        <div className="filter__option">
            <label className="label filter__label" htmlFor={specialName}>{label}</label>
            <select className="filter__select" name={specialName} id={specialName} value={opt} onChange={handleChange}>
                <Options options={options} />
            </select>
        </div>
    )
};

const Options = ({options}) => {
    return options.map((option, i) => (
        <option key={i} value={option}>{option}</option>
    ))
};

const mapStateToProps = (state) => {
    return {
        filters: state.queryParams
    };
};

const mapDispatchToProps = {
    updateQueryParams
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);