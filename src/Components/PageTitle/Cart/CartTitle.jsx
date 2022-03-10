import React from 'react';
import {
    Link
} from "react-router-dom";

function CartTitle(props) {
    return (
        <div className='breadcrumb-area' style={{"backgroundImage": "url(https://vue-plum-chi.vercel.app/img/bg/page-title.png)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb-text text-center">
                            <h1 className="">Shoping Cart</h1>
                            <ul className="breadcrumb-menu">
                                <li><Link to="#">home</Link></li>
                                <li><span>Cart</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartTitle;