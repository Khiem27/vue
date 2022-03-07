import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './AddToCartSlice';


AddToCart.propTypes = {
    
};

function AddToCart(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const { productInfo } = props;
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleSendProduct = () => {
        const product = {
            id: productInfo.id,
            image: productInfo.image,
            title: productInfo.title,
            price: productInfo.price,
            quantity: count,
        }

        const action = addToCart(product)
        dispatch(action)

        enqueueSnackbar("Đã thêm một sản phẩm vào giỏ hàng", { 
            variant: 'success',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
            },
        });

    }

    return (
        <div class="product-action-details variant-item">
            <div class="product-details-action d-flex">
                <div class="product-quantity ">
                    <div class="cart-plus-minus">
                        <p>{count}</p>
                        <button onClick={decrease} class="dec qtybutton">-</button>
                        <button onClick={increase} class="inc qtybutton">+</button></div>
                </div><button class=" details-action-icon" type="submit"><i class="fas fa-heart"></i></button><button class="details-action-icon" type="submit"><i class="fas fa-hourglass"></i></button>
                </div>
            <div class="details-cart mt-40"><button onClick={handleSendProduct} class="btn theme-btn">purchase now</button></div>
        </div>
    );
}

export default AddToCart;