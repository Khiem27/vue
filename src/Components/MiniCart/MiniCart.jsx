import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addFromLocal,
  calculatorTotalProducts,
  removeFromCart
} from "../AddToCart/AddToCartSlice";

MiniCart.propTypes = {};

function MiniCart(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    // Check cart từ localstorage
    const local = localStorage.getItem("productsInCart");
    const localParse = JSON.parse(local);
    if (localParse) {
      const action = addFromLocal(localParse);
      dispatch(action);
    }
  }, [dispatch]);

  const { enqueueSnackbar } = useSnackbar();

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
    <li className="d-shop-cart">
      <Link to="#">
        <i className="fas fa-shopping-cart"></i>{" "}
        <span className="cart-count">{products ? products.length : 0}</span>
      </Link>
      <ul className="minicart">
        {products.length ? (
          products.map((item, index) => {
            return (
              <li key={index}>
                <div className="cart-img">
                  <Link to="/shop/20">
                    <img src={item.image} alt="Cart" />
                  </Link>
                </div>
                <div className="cart-content">
                  <h3>
                    <Link to="/shop/20">{item.title}</Link>
                  </h3>
                  <div className="cart-price">
                    <span className="new">
                      ${item.price} * {item.quantity}
                    </span>{" "}
                    =<span className="new ml-1 ">${item.total}</span>
                  </div>
                </div>
                <div className="del-icon">
                  <Link to="#" onClick={() => handleRemoveItem(item.id)}>
                    <i className="far fa-trash-alt"></i>
                  </Link>
                </div>
              </li>
            );
          })
        ) : (
          <h3>Product Not Found</h3>
        )}
        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            <span className="f-right">${productsTotal}</span>
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <Link to="/cart">Shopping Cart</Link>
            <Link className="red-color" to="/checkout">
              Checkout
            </Link>
          </div>
        </li>
      </ul>
    </li>
  );
}

export default MiniCart;
