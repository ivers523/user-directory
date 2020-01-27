import React from "react";




export default function Footer ({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 1000,
        height: "50px",
        background: "black",
        borderRadius: "2px",
        ...style
      }}
    />
  );
}