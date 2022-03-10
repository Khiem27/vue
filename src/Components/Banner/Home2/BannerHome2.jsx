import React from 'react';

BannerHome2.propTypes = {
    
};

function BannerHome2(props) {
    return (
        <section className="banner-area pt-30 box-90">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-2 pos-relative mb-30">
                            <a href="/shop"><img alt="Bannerimage" src="https://vue-plum-chi.vercel.app/img/banner/banner-2/banner1.jpg" /></a>
                            <div className="banner-trend"><span>Trendy Item</span>
                                <h2><a href="/shop">New Year Trend Coming 2022</a></h2>
                                <div className="discover-link"><a href="/shop">discover</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-2 pos-relative mb-30">
                            <a href="/shop"><img alt="Banner" src="https://vue-plum-chi.vercel.app/img/banner/banner-2/banner2.jpg"/></a>
                            <div className="banner-look"><span>Get the look</span>
                                <h2>Festive Looks</h2><img alt="Look" src="https://vue-plum-chi.vercel.app/img/icon/look.png"/>
                                <p>Your delivery of outfit ideas, updated daily</p><a className="btn theme-btn" href="/shop">discover</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerHome2;