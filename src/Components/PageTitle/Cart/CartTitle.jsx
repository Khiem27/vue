import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

function CartTitle(props) {
    return (
        <div className='breadcrumb-area' style={{"backgroundImage": "url(https://vue-plum-chi.vercel.app/img/bg/page-title.png)"}}>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-text text-center">
                            <h1 class="">Shoping Cart</h1>
                            <ul class="breadcrumb-menu">
                                <li><Link to="/">home</Link></li>
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