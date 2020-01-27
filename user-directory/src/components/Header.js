import React from "react";




export default function Header({ style, pos }) {
    return (
        <div
            className="header"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 1000,
                height: "50px",
                background: "#fff",
                borderRadius: "2px",
                ...style
            }}
        />);
}