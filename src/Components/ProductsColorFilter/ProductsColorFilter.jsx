/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { filterValueColor } from "./ProductsColorFilterSlice";

ProductsColorFilter.propTypes = {};

function ProductsColorFilter(props) {
  const dispatch = useDispatch();

  const clickBlack = () => {
    dispatch(filterValueColor("black"));
  };

  const clickGreen = () => {
    dispatch(filterValueColor("green"));
  };

  const clickBlue = () => {
    dispatch(filterValueColor("blue"));
  };

  const clickWhite = () => {
    dispatch(filterValueColor("white"));
  };

  const clickRed = () => {
    dispatch(filterValueColor("red"));
  };

  const clickGray = () => {
    dispatch(filterValueColor("gray"));
  };

  return (
    <ul className="shop-link">
      <li>
        <a onClick={clickBlack} className="text-capitalize c-pointer">
          <span className="black box-shadow-none"></span> black
        </a>
      </li>
      <li>
        <a onClick={clickGreen} className="text-capitalize c-pointer">
          <span className="green box-shadow-none"></span> green
        </a>
      </li>
      <li>
        <a onClick={clickBlue} className="text-capitalize c-pointer">
          <span className="blue box-shadow-none"></span> blue
        </a>
      </li>
      <li>
        <a onClick={clickWhite} className="text-capitalize c-pointer">
          <span className="white box-shadow-none"></span> white
        </a>
      </li>
      <li>
        <a onClick={clickRed} className="text-capitalize c-pointer">
          <span className="red box-shadow-none"></span> red
        </a>
      </li>
      <li>
        <a onClick={clickGray} className="text-capitalize c-pointer">
          <span className="gray box-shadow-none"></span> gray
        </a>
      </li>
    </ul>
  );
}

export default ProductsColorFilter;
