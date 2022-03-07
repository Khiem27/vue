import React from 'react';
import { useDispatch } from 'react-redux';
import { filterValueColor } from './ProductsColorFilterSlice';

ProductsColorFilter.propTypes = {
    
};

function ProductsColorFilter(props) {
    const dispatch = useDispatch()

    const clickBlack = () => {
        dispatch(filterValueColor("black"))
    }

    const clickGreen = () => {
        dispatch(filterValueColor("green"))
    }

    const clickBlue = () => {
        dispatch(filterValueColor("blue"))
    }

    const clickWhite = () => {
        dispatch(filterValueColor("white"))
    }

    const clickRed = () => {
        dispatch(filterValueColor("red"))
    }

    const clickGray = () => {
        dispatch(filterValueColor("gray"))
    }

    return (
        <ul class="shop-link">
            <li><a href="javascript:void(0)" onClick={clickBlack} class="text-capitalize c-pointer"><span class="black box-shadow-none"></span> black</a></li>
            <li><a href="javascript:void(0)" onClick={clickGreen} class="text-capitalize c-pointer"><span class="green box-shadow-none"></span> green</a></li>
            <li><a href="javascript:void(0)" onClick={clickBlue} class="text-capitalize c-pointer"><span class="blue box-shadow-none"></span> blue</a></li>
            <li><a href="javascript:void(0)" onClick={clickWhite} class="text-capitalize c-pointer"><span class="white box-shadow-none"></span> white</a></li>
            <li><a href="javascript:void(0)" onClick={clickRed} class="text-capitalize c-pointer"><span class="red box-shadow-none"></span> red</a></li>
            <li><a href="javascript:void(0)" onClick={clickGray} class="text-capitalize c-pointer"><span class="gray box-shadow-none"></span> gray</a></li>
        </ul>
    );
}

export default ProductsColorFilter;