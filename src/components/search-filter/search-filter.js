import React, { useEffect } from "react";
import WithCoinService from "../hoc/with-coin-service";
import "./search-filter.scss";
import SelectOption from "../select-options/select-options";
import { optionsLoaded, optionsRequested } from "../../actions";
import { connect } from "react-redux";
import RangeOption from "../range-option/range-option";

const SearchFilter = ({isOpen, CoinService, optionsObj, optionsRequested, optionsLoaded, resetQueryParams}) => {

    useEffect(() => {
        optionsRequested();

        CoinService.getAdvancedOptions()
            .then(res => optionsLoaded(res))
            .catch(err => console.error(err));
    }, []);

    if (isOpen) {
        return (
            <div className="filter">
                <SelectOption
                    options={optionsObj.country}
                    label="Issuing country"
                    specialName="country"
                />
                <SelectOption
                    options={optionsObj.metal}
                    label="Metal"
                    specialName="metal"
                />
                <SelectOption
                    options={optionsObj.quality}
                    label="Quality of the coin"
                    specialName="quality"
                />
                <RangeOption
                    label="Price"
                    specialName="price"
                />
                <RangeOption
                    label="Year of issue"
                    specialName="year"
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        optionsObj: state.advancedOptions
    }
};

const mapDispatchToProps = {
    optionsLoaded,
    optionsRequested
};

export default WithCoinService()(connect(mapStateToProps, mapDispatchToProps)(SearchFilter));