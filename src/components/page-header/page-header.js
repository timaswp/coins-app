import React from "react";
import "./page-header.scss";
import { Link } from "react-router-dom";

const PageHeader = ({content, withLink}) => {
    return (
        <header className="header">
            <h1 className="title header__title">{content}</h1>
            <nav className="header__nav" style={!withLink ? { display: "none" } : {}}>
                <Link className="header__link" to={'/'}>Homepage</Link>
                <span> — List of the coins</span>
            </nav>
        </header>
    )
};

export default PageHeader;