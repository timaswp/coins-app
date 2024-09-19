import React from "react";
import "./page-header.scss";

const PageHeader = ({content}) => {
    return (
        <header className="header">
            <h1 className="title header__title">{content}</h1>
        </header>
    )
};

export default PageHeader;