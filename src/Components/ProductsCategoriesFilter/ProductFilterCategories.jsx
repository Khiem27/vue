/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import { filterValue } from "./ProductsFilterCategoriesSlice";

function ProductFilterCategories(props) {
  const dispatch = useDispatch();

  // Gửi giá trị filter lên store
  const clickMenClothing = () => {
    dispatch(filterValue("men's clothing"));
  };

  const clickWomenClothing = () => {
    dispatch(filterValue("women's clothing"));
  };

  const clickJewelery = () => {
    dispatch(filterValue("jewelery"));
  };

  const clickElectronics = () => {
    dispatch(filterValue("electronics"));
  };

  return (
    <div>
      <form>
        <ul className="shop-link">
          <li>
            <a to="#" className="checkBox checkBox-K">
              <input
                onClick={clickMenClothing}
                type="radio"
                id="menClothing"
                name="filterRadio"
              />
              <label htmlFor="menClothing">Men's clothing</label>
            </a>
          </li>

          <li>
            <a to="#" className="checkBox checkBox-K">
              <input
                onClick={clickWomenClothing}
                type="radio"
                id="womenClothing"
                name="filterRadio"
              />
              <label htmlFor="womenClothing">Women's clothing</label>
            </a>
          </li>

          <li>
            <a to="#" className="checkBox checkBox-K">
              <input
                onClick={clickJewelery}
                type="radio"
                id="jewelery"
                name="filterRadio"
              />
              <label htmlFor="jewelery">Jewelery</label>
            </a>
          </li>

          <li>
            <a to="#" className="checkBox checkBox-K">
              <input
                onClick={clickElectronics}
                type="radio"
                id="electronics"
                name="filterRadio"
              />
              <label htmlFor="electronics">Electronics</label>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ProductFilterCategories;
