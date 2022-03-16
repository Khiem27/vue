import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addFromLocal
} from "../AddToWishlist/AddToWishlistSlice";

WishlistContainer.propTypes = {
    
};

function WishlistContainer(props) {
  const dispatch = useDispatch();

  const wishlistLocal = localStorage.getItem("wishlistProduct");

    useEffect(() => {
        const wishlistData = JSON.parse(wishlistLocal);
    
        if (wishlistData) {
          const action = addFromLocal(wishlistData);
          dispatch(action);
        }
      }, [dispatch, wishlistLocal]);
    
      const wishlistItemSlice = useSelector(
        (state) => state.addToWishlist.products
      );
    return (
        <div className="wishlist-container">
            <div className="bg"></div>
            <Link className="icon" to="/wishlist">
                <i className="fas fa-heart  mt-1 mr-1"></i>
                <span className="count">{wishlistItemSlice.length}</span>
            </Link>
        </div>
    );
}

export default WishlistContainer;