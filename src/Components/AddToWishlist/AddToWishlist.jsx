import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFromLocal, addToWishlist } from "./AddToWishlistSlice";
AddToWishlist.propTypes = {};

function AddToWishlist(props) {
  const { dataProduct } = props;
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const wishlistItemSlice = useSelector(
    (state) => state.addToWishlist.products
  );
  const wishlistLocal = localStorage.getItem("wishlistProduct");
  useEffect(() => {
    const wishlistData = JSON.parse(wishlistLocal);

    if (wishlistData) {
      const action = addFromLocal(wishlistData);
      dispatch(action);
    }
  }, [dispatch, wishlistLocal]);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    wishlistItemSlice.map((item) => {
      if (dataProduct.id === item.id) {
        setActive(true);
      }
    });
  }, [dataProduct.id, wishlistItemSlice]);

  const clickWishlist = () => {
    if (dataProduct) {
      const action = addToWishlist(dataProduct);
      dispatch(action);
      setActive(!active);
    }
  };

  return (
    <Link to="#" className={active ? "active" : " "} onClick={clickWishlist}>
      <i className="far fa-heart" title="Wishlist"></i>
    </Link>
  );
}

export default AddToWishlist;
