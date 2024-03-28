"use client";
import { NumericFormat } from "react-number-format";

const PhotoNumber = ({ number }) => {
  return (
    <NumericFormat value={number} displayType={"text"} thousandSeparator />
  );
};

export default PhotoNumber;
