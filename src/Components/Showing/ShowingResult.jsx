import React from 'react';
import { useSelector } from 'react-redux';

function ShowingResult(props) {
    const newArr = useSelector((state) => state.showingResult.value)
    return (
        <div class="col-xl-5 col-lg-5 col-md-6">
            {   
                newArr.length ? 
                <div class="product-showing mb-40"><p>Showing 01–06 of {newArr.length} results</p></div>
                : null
            }
            </div>
    );
}

export default ShowingResult;