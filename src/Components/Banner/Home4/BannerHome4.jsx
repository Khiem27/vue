import React from 'react';
import { Link } from "react-router-dom";

BannerHome4.propTypes = {
    
};

function BannerHome4(props) {
    return (
        <section className="banner-area pt-30 box-90">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-2 pos-relative mb-30">
                            <Link to="/shop"><img alt="Bannerimage" src="https://vue-plum-chi.vercel.app/img/banner/banner-2/banner3.jpg"/></Link>
                            <div className="banner-trend"><span>Trendy Item</span>
                                <h2><Link to="/shop">New Year Trend Coming  2022</Link></h2>
                                <div className="discover-link"><Link to="/shop">discover</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-2 pos-relative mb-30">
                            <Link to="/shop"><img alt="Banner" src="https://vue-plum-chi.vercel.app/img/banner/banner-2/banner4.jpg"/></Link>
                            <div className="banner-look"><span>Get the look</span>
                                <h2>Festive Looks</h2><img style={{"width": "174px"}} alt="Look" src="https://vue-plum-chi.vercel.app/img/icon/look.png"/>
                                <p>Your delivery of outfit ideas, updated daily</p><Link className="btn theme-btn" to="/shop">discover</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerHome4;