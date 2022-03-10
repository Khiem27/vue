import React from 'react';
import { useSelector } from 'react-redux';

function CheckSearchErro(props) {
    const productsSearch = useSelector((state) => state.productSearch.productsSearch)
    return (
        <div>
            {/* Check xem có lọc được hay không, nếu k */}
            {
                productsSearch ?
                    productsSearch.length === 0 ? 
                        <h2 className="text-center d-block w-100 mt-5">No Product Found</h2>
                    : null
                : null
            }
        </div>
    );
}

export default CheckSearchErro;