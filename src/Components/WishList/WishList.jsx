import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../AddToCart/AddToCartSlice";
import {
  addFromLocal,
  removeWishlist
} from "../AddToWishlist/AddToWishlistSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WishlistTitle from "../PageTitle/Wishlist/WishlistTitle";

WishList.propTypes = {};

function WishList(props) {
  const dispatch = useDispatch();

  const wishlistLocal = localStorage.getItem("wishlistProduct");
  useEffect(() => {
    const wishlistData = JSON.parse(wishlistLocal);

    if (wishlistData) {
      const action = addFromLocal(wishlistData);
      dispatch(action);
    }

    window.scrollTo(0, 0)
  }, [dispatch, wishlistLocal]);

  const wishlistItemSlice = useSelector(
    (state) => state.addToWishlist.products
  );

  const handleRemoveItem = (id) => {
    const action = removeWishlist(id);
    dispatch(action);
  };

  const handleSendProduct = (id) => {
    const product = {
      id: wishlistItemSlice[id].id,
      image: wishlistItemSlice[id].image,
      title: wishlistItemSlice[id].title,
      price: wishlistItemSlice[id].price,
      quantity: 1,
    };

    const action = addToCart(product);
    dispatch(action);
  };

  return (
    <>
      <Header />
      <WishlistTitle />
      {wishlistItemSlice.length !== 0 ? (
        <section class="cart-area pt-100 pb-100">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <form action="#">
                  <div class="table-content table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="product-thumbnail">Images</th>
                          <th class="cart-product-name">Product</th>
                          <th class="product-price">Unit Price</th>
                          <th class="product-quantity">Quantity</th>
                          <th class="product-subtotal">Total</th>
                          <th class="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItemSlice.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td class="product-thumbnail">
                                <Link to="#">
                                  <img src={item.image} alt="wishlist" />
                                </Link>
                              </td>
                              <td class="product-name">
                                <Link to="#">{item.title}</Link>
                              </td>
                              <td class="product-price">
                                <span class="amount">${item.price}</span>
                              </td>
                              <td class="product-quantity">
                                <Link onClick={() => handleSendProduct(index)} class="btn theme-btn-2" to="#">
                                  Add to cart
                                </Link>
                              </td>
                              <td class="product-subtotal">
                                <span class="amount">${item.price}</span>
                              </td>
                              <td class="product-remove">
                                <Link
                                  to="#"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <i class="fa fa-times"></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h2 class="pt-100 pb-50 text-center w-100">No Product Found</h2>
      )}
      <Footer />
    </>
  );
}

export default WishList;
