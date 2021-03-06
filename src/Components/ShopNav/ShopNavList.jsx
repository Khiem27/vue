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
        <div className="col-xl-7 col-lg-7 col-md-6">
            <div className="shop-tab f-right">
                <ul className="nav text-center nav" id="myTab" role="tablist">
                    <li className="nav-item">
                        <Link to="#" onClick={clickDisplayActiveFalse} role="tab" data-rb-event-key="list" className={displayActive ? "nav-link" : "nav-link active"}>
                            <i className="fas fa-list-ul"></i>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="#" onClick={clickDisplayActiveTrue} role="tab" data-rb-event-key="grid" className={displayActive ? "nav-link active" : "nav-link"}>
                            <i className="fas fa-th-large"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ShopNavList;