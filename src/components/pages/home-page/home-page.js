import React from "react";
import "./home-page.scss";
import PageHeader from "../../page-header/page-header";
import SearchField from "../../search-field/search-field";
import CategoryList from "../../category-list/category-list";

const HomePage = () => {
    return (
        <>
            <PageHeader content="Homepage"/>
            <SearchField />
            <CategoryList />
        </>
    )
};

export default HomePage;