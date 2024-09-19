import React from "react";

const Arrow = ({ style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            style={style}
        >
            <path d="M13 7L7 0.999999L1 7" stroke="#000" />
        </svg>
    );
};

export default Arrow;