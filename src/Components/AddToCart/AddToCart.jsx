import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./AddToCartSlice";

AddToCart.propTypes = {};

function AddToCart(props) {
  const { enqueueSnackbar } = useSnackbar();

  const { productInfo } = props;
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSendProduct = () => {
    const product = {
      id: productInfo.id,
      image: productInfo.image,
      title: productInfo.title,
      price: productInfo.price,
      quantity: count,
    };

    const action = addToCart(product);
    dispatch(action);

    enqueueSnackbar("Đã thêm một sản phẩm vào giỏ hàng", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "left",
      },
    });
  };

  return (
    <div className="product-action-details variant-item">
      <div className="product-details-action d-flex">
        <div className="product-quantity ">
          <div className="cart-plus-minus">
            <p>{count}</p>
            <button onClick={decrease} className="dec qtybutton">
              -
            </button>
            <button onClick={increase} className="inc qtybutton">
              +
            </button>
          </div>
        </div>
        <button className=" details-action-icon" type="submit">
          <i className="fas fa-heart"></i>
        </button>
        <button className="details-action-icon" type="submit">
          <i className="fas fa-hourglass"></i>
        </button>
      </div>
      <div className="details-cart mt-40">
        <button onClick={handleSendProduct} className="btn theme-btn">
          purchase now
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
