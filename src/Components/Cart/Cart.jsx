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
                        {products.length !== 0
                          ? products.map((item, index) => {
                              return (
                                <tr>
                                  <td class="product-thumbnail">
                                    <Link href="#">
                                      <img src={item.image} alt="cart" />
                                    </Link>
                                  </td>
                                  <td class="product-name">
                                    <Link href="#">{item.title}</Link>
                                  </td>
                                  <td class="product-price">
                                    <span class="amount">${item.price}</span>
                                  </td>
                                  <td class="product-quantity">
                                    <div class="cart-plus-minus">
                                      <p>{item.quantity}</p>
                                      <div
                                        class="dec qtybutton"
                                        onClick={() =>
                                          sendInfo(item.id, "decrease")
                                        }
                                      >
                                        -
                                      </div>
                                      <div
                                        class="inc qtybutton"
                                        onClick={() =>
                                          sendInfo(item.id, "increase")
                                        }
                                      >
                                        +
                                      </div>
                                    </div>
                                  </td>
                                  <td class="product-subtotal">
                                    <span class="amount">${item.total}</span>
                                  </td>
                                  <td class="product-remove">
                                    <Link
                                      onClick={() => handleRemoveItem(item.id)}
                                    >
                                      <i class="fa fa-times"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="coupon-all">
                        <div class="coupon">
                          <form>
                            <input
                              id="coupon_code"
                              class="input-text"
                              name="coupon_code"
                              placeholder="Coupon code"
                              type="text"
                            />
                            <button
                              class="btn theme-btn-2"
                              name="apply_coupon"
                              type="submit"
                            >
                              Apply coupon
                            </button>
                          </form>
                        </div>
                        <div class="coupon2">
                          <Link class="btn theme-btn" href="/checkout">
                            Submit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-5 ml-auto">
                      <div class="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul class="mb-20">
                          <li>
                            Subtotal <span>${productsTotal}</span>
                          </li>
                          <li>
                            Total <span>${productsTotal}</span>
                          </li>
                        </ul>
                        <Link class="btn theme-btn" href="/checkout">
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
        <h2 class="pt-100 pb-50 text-center w-100">No Product Found</h2>
      )}
      <Footer />
    </>
  );
}

export default Cart;
