import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link
} from "react-router-dom";
import {
  addFromLocal, calculatorTotalProducts, removeFromCart
} from "../AddToCart/AddToCartSlice";

MiniCart.propTypes = {};

function MiniCart(props) {
  useEffect(() => {
    const local = localStorage.getItem("productsInCart");
    const localParse = JSON.parse(local);
    if (localParse) {
      const action = addFromLocal(localParse);
      dispatch(action);
    }
  }, []);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.addToCart.products);
  const productsTotal = useSelector((state) => state.addToCart.cartTotal);
  const handleRemoveItem = (id) => {
    const action = removeFromCart(id);
    dispatch(action);

    enqueueSnackbar("Đã xoá một sản phẩm từ giỏ hàng", {
      variant: "warning",
    });
  };

  dispatch(calculatorTotalProducts());
  return (
    <li class="d-shop-cart">
      <Link to="#">
        <i class="fas fa-shopping-cart"></i>{" "}
        <span class="cart-count">{products ? products.length : 0}</span>
      </Link>
      <ul class="minicart">
        {products.length ? (
          products.map((item, index) => {
            return (
              <li key={index}>
                <div class="cart-img">
                  <Link to="/shop/20">
                    <img src={item.image} alt="Cart" />
                  </Link>
                </div>
                <div class="cart-content">
                  <h3>
                    <Link to="/shop/20">{item.title}</Link>
                  </h3>
                  <div class="cart-price">
                    <span class="new">
                      ${item.price} * {item.quantity}
                    </span>{" "}
                    =<span class="new ml-1 ">${item.total}</span>
                  </div>
                </div>
                <div class="del-icon">
                  <Link onClick={() => handleRemoveItem(item.id)}>
                    <i class="far fa-trash-alt"></i>
                  </Link>
                </div>
              </li>
            );
          })
        ) : (
          <h3>Product Not Found</h3>
        )}
        <li>
          <div class="total-price">
            <span class="f-left">Total:</span>
            <span class="f-right">${productsTotal}</span>
          </div>
        </li>
        <li>
          <div class="checkout-link">
            <Link to="/cart">Shopping Cart</Link>
            <a class="red-color" href="/checkout">
              Checkout
            </a>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default MiniCart;
