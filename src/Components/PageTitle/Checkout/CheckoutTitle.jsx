import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

CheckoutTitle.propTypes = {
    
};

function CheckoutTitle(props) {
    return (
        <div className='breadcrumb-area' style={{"backgroundImage": "url(https://vue-plum-chi.vercel.app/img/bg/page-title.png)"}}>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="breadcrumb-text text-center">
                            <h1 class="">Checkout</h1>
                            <ul class="breadcrumb-menu">
                                <li><Link to="/">home</Link></li>
                                <li><span>Checkout</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutTitle;