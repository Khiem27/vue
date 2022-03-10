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
        <ul className="shop-link">
            <li><Link onClick={clickBlack} className="text-capitalize c-pointer"><span className="black box-shadow-none"></span> black</Link></li>
            <li><Link onClick={clickGreen} className="text-capitalize c-pointer"><span className="green box-shadow-none"></span> green</Link></li>
            <li><Link onClick={clickBlue} className="text-capitalize c-pointer"><span className="blue box-shadow-none"></span> blue</Link></li>
            <li><Link onClick={clickWhite} className="text-capitalize c-pointer"><span className="white box-shadow-none"></span> white</Link></li>
            <li><Link onClick={clickRed} className="text-capitalize c-pointer"><span className="red box-shadow-none"></span> red</Link></li>
            <li><Link onClick={clickGray} className="text-capitalize c-pointer"><span className="gray box-shadow-none"></span> gray</Link></li>
        </ul>
    );
}

export default ProductsColorFilter;