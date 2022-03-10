/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { filterValueSize } from "../ProductsSizeFilter/ProductsSizeFilterSlice";

ProductsSizeFilter.propTypes = {};

function ProductsSizeFilter(props) {
  const dispatch = useDispatch();

  const clickL = () => {
    dispatch(filterValueSize("l"));
  };

  const clickM = () => {
    dispatch(filterValueSize("m"));
  };

  const clickX = () => {
    dispatch(filterValueSize("x"));
  };

  const clickXL = () => {
    dispatch(filterValueSize("xl"));
  };

  const clickXXL = () => {
    dispatch(filterValueSize("xxl"));
  };

  return (
    <form action="">
      <ul className="shop-link">
        <li>
          <a className="checkBox">
            <input onClick={clickL} type="radio" id="L" name="filter" />{" "}
            <label for="L">L</label>
          </a>
        </li>
        <li>
          <a className="checkBox">
            <input onClick={clickM} type="radio" id="M" name="filter" />{" "}
            <label for="M">M</label>
          </a>
        </li>
        <li>
          <a className="checkBox">
            <input onClick={clickX} type="radio" id="X" name="filter" />{" "}
            <label for="X">X</label>
          </a>
        </li>
        <li>
          <a className="checkBox">
            <input onClick={clickXL} type="radio" id="XL" name="filter" />{" "}
            <label for="XL">XL</label>
          </a>
        </li>
        <li>
          <a className="checkBox">
            <input onClick={clickXXL} type="radio" id="XXL" name="filter" />{" "}
            <label for="XXL">XXL</label>
          </a>
        </li>
      </ul>
    </form>
  );
}

export default ProductsSizeFilter;
