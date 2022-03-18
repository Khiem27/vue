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
    window.scrollTo(0, 0);
  }, []);
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
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItemSlice.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="product-thumbnail">
                                <Link to="#">
                                  <img src={item.image} alt="wishlist" />
                                </Link>
                              </td>
                              <td className="product-name">
                                <Link to="#">{item.title}</Link>
                              </td>
                              <td className="product-price">
                                <span className="amount">${item.price}</span>
                              </td>
                              <td className="product-quantity">
                                <Link
                                  onClick={() => handleSendProduct(index)}
                                  className="btn theme-btn-2"
                                  to="#"
                                >
                                  Add to cart
                                </Link>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">${item.price}</span>
                              </td>
                              <td className="product-remove">
                                <Link
                                  to="#"
                                  onClick={() => handleRemoveItem(item.id)}
                                >
                                  <i className="fa fa-times"></i>
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
        <h2 className="pt-100 pb-50 text-center w-100">No Product Found</h2>
      )}
      <Footer />
    </>
  );
}

export default WishList;
