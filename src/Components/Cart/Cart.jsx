import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    addFromLocal, removeFromCart, updateQuantity
} from "../AddToCart/AddToCartSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CartTitle from "../PageTitle/Cart/CartTitle";

Cart.propTypes = {};

function Cart(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const local = localStorage.getItem("productsInCart");
    const localParse = JSON.parse(local);
    if (localParse) {
      const action = addFromLocal(localParse);
      dispatch(action);
    }
  },[dispatch]);

  const products = useSelector((state) => state.addToCart.products);
  const productsTotal = useSelector((state) => state.addToCart.cartTotal);
  const { enqueueSnackbar } = useSnackbar();

  const sendInfo = (id, stt) => {
    const updateValue = {
      id,
      stt,
    };
    const action = updateQuantity(updateValue);
    dispatch(action);
  };

  const handleRemoveItem = (id) => {
    const action = removeFromCart(id);
    dispatch(action);

    enqueueSnackbar("Đã xoá một sản phẩm từ giỏ hàng", {
      variant: "warning",
    });
  };

  return (
    <>
      <Header />
      <CartTitle />
      {products.length !== 0 ? (
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
                        {products.length !== 0
                          ? products.map((item, index) => {
                              return (
                                <tr>
                                  <td className="product-thumbnail">
                                    <Link href="#">
                                      <img src={item.image} alt="cart" />
                                    </Link>
                                  </td>
                                  <td className="product-name">
                                    <Link href="#">{item.title}</Link>
                                  </td>
                                  <td className="product-price">
                                    <span className="amount">${item.price}</span>
                                  </td>
                                  <td className="product-quantity">
                                    <div className="cart-plus-minus">
                                      <p>{item.quantity}</p>
                                      <div
                                        className="dec qtybutton"
                                        onClick={() =>
                                          sendInfo(item.id, "decrease")
                                        }
                                      >
                                        -
                                      </div>
                                      <div
                                        className="inc qtybutton"
                                        onClick={() =>
                                          sendInfo(item.id, "increase")
                                        }
                                      >
                                        +
                                      </div>
                                    </div>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount">${item.total}</span>
                                  </td>
                                  <td className="product-remove">
                                    <Link
                                      onClick={() => handleRemoveItem(item.id)}
                                    >
                                      <i className="fa fa-times"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <form>
                            <input
                              id="coupon_code"
                              className="input-text"
                              name="coupon_code"
                              placeholder="Coupon code"
                              type="text"
                            />
                            <button
                              className="btn theme-btn-2"
                              name="apply_coupon"
                              type="submit"
                            >
                              Apply coupon
                            </button>
                          </form>
                        </div>
                        <div className="coupon2">
                          <Link className="btn theme-btn" href="/checkout">
                            Submit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>
                            Subtotal <span>${productsTotal}</span>
                          </li>
                          <li>
                            Total <span>${productsTotal}</span>
                          </li>
                        </ul>
                        <Link className="btn theme-btn" href="/checkout">
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
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

export default Cart;
