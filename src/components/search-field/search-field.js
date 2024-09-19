import React from "react";
import Arrow from "../../assets/svg/Arrow";
import "./search-field.scss";
import { connect } from "react-redux";
import { toggleFilter } from "../../actions";
import SearchFilter from "../search-filter/search-filter";

const SearchField = (props) => {
    const {isOpen, toggleFilter} = props;

    return (
        <>
            <div className="search" style={isOpen ? { marginBottom: "25px" } : {}} >
                <label htmlFor="search" className="search__label label">Input field</label>
                <input type="text" id="search" className="search__input"/>
                
                <button className="search__btn">Search</button>
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
        isOpen: state.filterIsOpen
    }
};

const mapDispatchToProps = {
    toggleFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);