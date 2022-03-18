/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
        <Link to="#" onClick={clickFurniture} className="text-capitalize ">
          {" "}
          furniture{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickLadies} className="text-capitalize ">
          {" "}
          ladies{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickGent} className="text-capitalize ">
          {" "}
          gent{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickClothing} className="text-capitalize ">
          {" "}
          Clothing{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickJacket} className="text-capitalize ">
          {" "}
          jacket{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickTshart} className="text-capitalize ">
          {" "}
          tshart{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickLamp} className="text-capitalize ">
          {" "}
          lamp{" "}
        </Link>
      </li>
      <li>
        <Link to="#" onClick={clickChair} className="text-capitalize ">
          {" "}
          chair{" "}
        </Link>
      </li>
    </ul>
  );
}

export default ProductsTagsFilter;
