import React from 'react';
import {
    Link
} from "react-router-dom";

TopSellers.propTypes = {
    
};

function TopSellers(props) {
    return (
        <section class="top-seller-area box-90">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-5 col-lg-8 col-md-7">
                        <div class="area-title mb-50">
                            <h2>Top Sellers</h2>
                            <p>Browse the huge variety of our products</p>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-4 col-md-5">
                        <div class="vue-btn text-left text-md-right mb-50"><a class="btn theme-btn" href="/shop">Collection</a></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-5 col-lg-5">
                        <div class="top-seller mb-50"><img src="https://vue-plum-chi.vercel.app/img/banner/top-seller/banner1.jpg" alt="Product"/>
                            <div class="seller-box text-center">
                                <div class="top-seller-content text-left">
                                    <h2><a href="/shop">Minimal Home Decor</a></h2>
                                    <div class="pro-price mb-25"><span>$207.00 USD</span><span class="old-price">$230.00 USD</span></div>
                                    <div class="top-seller-btn"><a class="btn theme-btn" href="/shop">Shop Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7">
                        <div class="top-seller text-right mb-50"><img src="https://vue-plum-chi.vercel.app/img/banner/top-seller/banner2.jpg" alt="topseller"/>
                            <div class="sellet-2-content">
                                <h2><a href="/shop">Xcross Comoer Furniture</a></h2>
                                <div class="pro-price mb-25"><span>$ 207.00 USD</span><span class="old-price">$230.00 USD</span></div>
                                <div class="top-seller-btn"><a class="btn theme-btn-2 mr-20" href="/shop">view details</a><Link class="shop-btn"><i class="fas fa-shopping-cart"></i></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopSellers;