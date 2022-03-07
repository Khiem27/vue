import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Link
} from "react-router-dom";
import { changeCol3Nav } from '../ShopNav/ShopNavSlice';

function ShopNavList(props) {
    const [displayActive, setDisplayActive] = useState(false)
    const dispatch = useDispatch()
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
                        <Link onClick={clickDisplayActiveFalse} role="tab" data-rb-event-key="list" class={displayActive ? "nav-link" : "nav-link active"}>
                            <i class="fas fa-list-ul"></i>
                        </Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link onClick={clickDisplayActiveTrue} role="tab" data-rb-event-key="grid" class={displayActive ? "nav-link active" : "nav-link"}>
                            <i class="fas fa-th-large"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ShopNavList;