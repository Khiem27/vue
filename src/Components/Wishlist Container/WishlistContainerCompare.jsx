import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFromLocal } from "../AddToCompare/AddToCompareSlice";
WishlistContainerCompare.propTypes = {};

function WishlistContainerCompare(props) {
  const dispatch = useDispatch();

  const compareLocal = localStorage.getItem("compareProduct");
  useEffect(() => {
    const compareData = JSON.parse(compareLocal);

    if (compareData) {
      const action = addFromLocal(compareData);
      dispatch(action);
    }
  }, [dispatch, compareLocal]);

  const compareItemSlice = useSelector((state) => state.addToCompare.products);
  return (
    <div className="wishlist-container compare">
      <div className="bg"></div>
      <Link className="icon" to="/compare">
        <i className="fas fa-exchange-alt mt-2 mr-2"></i>
        <span className="count">{compareItemSlice.length}</span>
      </Link>
    </div>
  );
}

export default WishlistContainerCompare;
