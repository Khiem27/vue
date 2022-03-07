import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import ProductApi from '../../Api/Product/ProductApi';
import { getSearchInput, getProductsSearch } from '../Search/ProductSearchSlice'

ProductSearch.propTypes = {
    
};

function ProductSearch(props) {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getAllProducts = async () => {
            const allProducts = await ProductApi.getAll()
            const getProducts = allProducts.data
            setProducts(getProducts);
        }
        getAllProducts()
    }, [])

    const dispatch = useDispatch()

    const inputEl = useRef(null)

    const submitSearch = () => {
        const form = inputEl.current
        const value = form['search'].value
        // Giá trị search
        dispatch(getSearchInput(value))
    }

    return (
        <div>
            <form action="#" class="shop-search" ref={inputEl}>
                <input type="text" onChange={submitSearch} placeholder="Your keyword...." name='search'/>
                <button type='button' onClick={submitSearch}><i class="fa fa-search"></i></button>
            </form>
        </div>
    );
}

export default ProductSearch;