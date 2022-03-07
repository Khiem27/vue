import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Link
} from "react-router-dom";
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
            <li><Link onClick={clickBlack} class="text-capitalize c-pointer"><span class="black box-shadow-none"></span> black</Link></li>
            <li><Link onClick={clickGreen} class="text-capitalize c-pointer"><span class="green box-shadow-none"></span> green</Link></li>
            <li><Link onClick={clickBlue} class="text-capitalize c-pointer"><span class="blue box-shadow-none"></span> blue</Link></li>
            <li><Link onClick={clickWhite} class="text-capitalize c-pointer"><span class="white box-shadow-none"></span> white</Link></li>
            <li><Link onClick={clickRed} class="text-capitalize c-pointer"><span class="red box-shadow-none"></span> red</Link></li>
            <li><Link onClick={clickGray} class="text-capitalize c-pointer"><span class="gray box-shadow-none"></span> gray</Link></li>
        </ul>
    );
}

export default ProductsColorFilter;