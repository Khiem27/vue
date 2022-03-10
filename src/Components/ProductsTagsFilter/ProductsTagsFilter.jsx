/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { filterValueTags } from "../ProductsTagsFilter/ProductsTagsFilterSlice";

function ProductsTagsFilter(props) {
  const dispatch = useDispatch();

  const clickFurniture = () => {
    dispatch(filterValueTags("Furniture"));
  };

  const clickLadies = () => {
    dispatch(filterValueTags("Ladies"));
  };

  const clickGent = () => {
    dispatch(filterValueTags("Gent"));
  };

  const clickClothing = () => {
    dispatch(filterValueTags("Clothing"));
  };

  const clickJacket = () => {
    dispatch(filterValueTags("Jacket"));
  };

  const clickTshart = () => {
    dispatch(filterValueTags("Tshart"));
  };

  const clickLamp = () => {
    dispatch(filterValueTags("Lamp"));
  };

  const clickChair = () => {
    dispatch(filterValueTags("Chair"));
  };

  return (
    <ul className="shop-tag">
      <li>
        <a onClick={clickFurniture} className="text-capitalize ">
          {" "}
          furniture{" "}
        </a>
      </li>
      <li>
        <a onClick={clickLadies} className="text-capitalize ">
          {" "}
          ladies{" "}
        </a>
      </li>
      <li>
        <a onClick={clickGent} className="text-capitalize ">
          {" "}
          gent{" "}
        </a>
      </li>
      <li>
        <a onClick={clickClothing} className="text-capitalize ">
          {" "}
          Clothing{" "}
        </a>
      </li>
      <li>
        <a onClick={clickJacket} className="text-capitalize ">
          {" "}
          jacket{" "}
        </a>
      </li>
      <li>
        <a onClick={clickTshart} className="text-capitalize ">
          {" "}
          tshart{" "}
        </a>
      </li>
      <li>
        <a onClick={clickLamp} className="text-capitalize ">
          {" "}
          lamp{" "}
        </a>
      </li>
      <li>
        <a onClick={clickChair} className="text-capitalize ">
          {" "}
          chair{" "}
        </a>
      </li>
    </ul>
  );
}

export default ProductsTagsFilter;
