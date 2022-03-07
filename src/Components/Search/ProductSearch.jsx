import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchInput } from '../Search/ProductSearchSlice';

ProductSearch.propTypes = {
    
};

function ProductSearch(props) {
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