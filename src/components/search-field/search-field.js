import React, { useState, useEffect } from "react";
import Arrow from "../../assets/svg/Arrow";
import "./search-field.scss";
import { connect } from "react-redux";
import { toggleFilter, updateQueryParams } from "../../actions";
import SearchFilter from "../search-filter/search-filter";
import { useNavigate } from "react-router-dom";

const SearchField = (props) => {
    const {isOpen, toggleFilter, updateQueryParams, filters} = props;

    const navigate = useNavigate();

    const [search, setName] = useState(filters.search || '');

    useEffect(() => {
        setName(filters.search || '');
    }, [filters.search]);

    const handleChange = (e) => {
        setName(e.target.value);
        updateQueryParams('search', e.target.value);
    };

    const handleSearch = () => {
        const query = new URLSearchParams(filters).toString();
        navigate(`/coins-list?${query}`);
    };

    return (
        <>
            <div className="search">
                <label htmlFor="search" className="search__label label">Input field</label>
                <input type="text" id="search" className="search__input" value={search} onChange={handleChange}/>
                
                <button className="search__btn" onClick={handleSearch}>Search</button>
                <button className="search__advanced" onClick={() => toggleFilter()}>
                    Advanced filter
                    <Arrow style={!isOpen ? { transform: "rotate(180deg)" } : {}} />
                </button>
            </div>
            <SearchFilter isOpen={isOpen}/>
        </>
        
    )
};

const mapStateToProps = (state) => {
    return {
        isOpen: state.filterIsOpen,
        filters: state.queryParams
    }
};

const mapDispatchToProps = {
    toggleFilter,
    updateQueryParams
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);