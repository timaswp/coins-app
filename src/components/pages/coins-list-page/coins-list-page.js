import React from "react";
import PageHeader from "../../page-header/page-header";
import SearchField from "../../search-field/search-field";
import CoinsList from "../../coins-list/coins-list";

const CoinsListPage = () => {
    return (
        <>
            <PageHeader content="List of the coins" withLink />
            <SearchField/>
            <CoinsList/>
        </>
    )
};

export default CoinsListPage;