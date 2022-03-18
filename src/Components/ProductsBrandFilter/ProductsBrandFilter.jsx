/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { filterValueBrand } from "../ProductsBrandFilter/ProductsBrandFilterSlice";

function ProductsBrandFilter(props) {
  const dispatch = useDispatch();

  const clickIkea = () => {
    dispatch(filterValueBrand("Ikea"));
  };

  const clickSteelcase = () => {
    dispatch(filterValueBrand("Steelcase"));
  };

  const clickStickley = () => {
    dispatch(filterValueBrand("Stickley"));
  };

  const clickNike = () => {
    dispatch(filterValueBrand("Nike"));
  };

  const clickEverlane = () => {
    dispatch(filterValueBrand("Everlane"));
  };

  const clickAsos = () => {
    dispatch(filterValueBrand("Asos"));
  };

  const clickGucci = () => {
    dispatch(filterValueBrand("Gucci"));
  };

  const clickDior = () => {
    dispatch(filterValueBrand("Dior"));
  };

  const clickChanel = () => {
    dispatch(filterValueBrand("Chanel"));
  };

  return (
    <form action="">
      <ul className="shop-link">
        <li>
          <a to="#" className="checkBox">
            <input onClick={clickIkea} type="radio" id="ikea" name="filter" />
            <label htmlFor="ikea">ikea</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input
              onClick={clickSteelcase}
              type="radio"
              id="steelcase"
              name="filter"
            />
            <label htmlFor="steelcase">steelcase</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input
              onClick={clickStickley}
              type="radio"
              id="stickley"
              name="filter"
            />
            <label htmlFor="stickley">stickley</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input onClick={clickNike} type="radio" id="nike" name="filter" />
            <label htmlFor="nike">nike</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input
              onClick={clickEverlane}
              type="radio"
              id="everlane"
              name="filter"
            />
            <label htmlFor="everlane">everlane</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input onClick={clickAsos} type="radio" id="asos" name="filter" />
            <label htmlFor="asos">asos</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input onClick={clickGucci} type="radio" id="gucci" name="filter" />
            <label htmlFor="gucci">gucci</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input onClick={clickDior} type="radio" id="dior" name="filter" />
            <label htmlFor="dior">dior</label>
          </a>
        </li>
        <li>
          <a to="#" className="checkBox">
            <input
              onClick={clickChanel}
              type="radio"
              id="chanel"
              name="filter"
            />
            <label htmlFor="chanel">chanel</label>
          </a>
        </li>
      </ul>
    </form>
  );
}

export default ProductsBrandFilter;
