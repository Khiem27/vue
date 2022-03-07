import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterValueSize } from '../ProductsSizeFilter/ProductsSizeFilterSlice';

ProductsSizeFilter.propTypes = {
    
};

function ProductsSizeFilter(props) {
    const dispatch = useDispatch()

    const clickL = () => {
        dispatch(filterValueSize("l"))
    }

    const clickM = () => {
        dispatch(filterValueSize("m"))
    }

    const clickX = () => {
        dispatch(filterValueSize("x"))
    }

    const clickXL = () => {
        dispatch(filterValueSize("xl"))
    }

    const clickXXL = () => {
        dispatch(filterValueSize("xxl"))
    }

    return (
        <form action="">
            <ul class="shop-link">
            <li><Link class="checkBox"><input onClick={clickL} type="radio" id="L" name="filter"/> <label for="L">L</label></Link></li>
            <li><Link class="checkBox"><input onClick={clickM} type="radio" id="M" name="filter"/> <label for="M">M</label></Link></li>
            <li><Link class="checkBox"><input onClick={clickX} type="radio" id="X" name="filter"/> <label for="X">X</label></Link></li>
            <li><Link class="checkBox"><input onClick={clickXL} type="radio" id="XL" name="filter"/> <label for="XL">XL</label></Link></li>
            <li><Link class="checkBox"><input onClick={clickXXL} type="radio" id="XXL" name="filter"/> <label for="XXL">XXL</label></Link></li>
        </ul>
        </form>
    );
}

export default ProductsSizeFilter;