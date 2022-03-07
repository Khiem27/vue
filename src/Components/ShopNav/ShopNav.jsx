import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductApi from '../../Api/Product/ProductApi';
import { changeCol3Nav } from '../ShopNav/ShopNavSlice';

function ShopNav(props) {
    const [products, setProducts] = useState(null)
    const column = useSelector((state) => state.shopNav.col3Nav)
    const [displayActive, setDisplayActive] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const getAllProducts = async () => {
            const allProducts = await ProductApi.getAll()
            const getProducts = allProducts.data
            setProducts(getProducts);
        }
        getAllProducts()
    }, [])

    // Event đổi giao diện
    const clickDisplayActiveTrue = () => {
        setDisplayActive(true)
        dispatch(changeCol3Nav(3))
    }

    const clickDisplayActiveFalse = () => {
        setDisplayActive(false)
        dispatch(changeCol3Nav(1))
    }

    return (
        <div class="col-xl-7 col-lg-7 col-md-6">
            <div class="shop-tab f-right">
                <ul class="nav text-center nav" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a onClick={clickDisplayActiveFalse} role="tab" data-rb-event-key="list" class={displayActive ? "nav-link" : "nav-link active"}>
                            <i class="fas fa-list-ul"></i>
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a onClick={clickDisplayActiveTrue} role="tab" data-rb-event-key="grid" class={displayActive ? "nav-link active" : "nav-link"}>
                            <i class="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ShopNav;