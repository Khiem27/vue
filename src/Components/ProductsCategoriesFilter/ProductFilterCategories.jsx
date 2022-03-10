import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Link
} from "react-router-dom";
import { filterValue } from './ProductsFilterCategoriesSlice';

function ProductFilterCategories(props) {
    const dispatch = useDispatch()

// Gửi giá trị filter lên store
    const clickMenClothing = () => {
        dispatch(filterValue("men's clothing"))
    }

    const clickWomenClothing = () => {
        dispatch(filterValue("women's clothing"))
    }

    const clickJewelery = () => {
        dispatch(filterValue("jewelery"))
    }

    const clickElectronics = () => {
        dispatch(filterValue("electronics"))
    }

    return (
        <div>
            <form>
                
            <ul className="shop-link">
                <li ><Link className="checkBox checkBox-K">
                    <input onClick={clickMenClothing} type="radio" id="menClothing" name="filterRadio" />
                    <label for="menClothing">Men's clothing</label>
                </Link></li>

                <li><Link className="checkBox checkBox-K">
                    <input onClick={clickWomenClothing} type="radio" id="womenClothing" name="filterRadio" />
                    <label for="womenClothing">Women's clothing</label>
                </Link></li>

                <li><Link className="checkBox checkBox-K" >
                    <input onClick={clickJewelery} type="radio" id="jewelery" name="filterRadio" />
                    <label for="jewelery">Jewelery</label>
                </Link></li>

                <li><Link className="checkBox checkBox-K">
                    <input onClick={clickElectronics} type="radio" id="electronics" name="filterRadio" />
                    <label for="electronics">Electronics</label>
                </Link></li>
            </ul>
            </form>
        </div>
    );
}

export default ProductFilterCategories;