"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowfallItem = () => {
  return (
    <Snowfall
      color="#fff"
      snowflakeCount={100}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh", 
        zIndex: -1, 
      }}
    />
  );
};

export default SnowfallItem;
