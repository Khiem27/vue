import React from 'react';

BannerHome4.propTypes = {
    
};

function BannerHome4(props) {
    return (
        <section class="banner-area pt-30 box-90">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="banner-2 pos-relative mb-30">
                            <a href="/shop"><img alt="Banner image" src="https://vue-plum-chi.vercel.app/img/banner/banner-2/banner3.jpg"/></a>
                            <div class="banner-trend"><span>Trendy Item</span>
                                <h2><a href="/shop">New Year Trend Coming  2022</a></h2>
                                <div class="discover-link"><a href="/shop">discover</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="banner-2 pos-relative mb-30">
                            <a href="/shop"><img alt="Banner" src="https://vue-plum-chi.vercel.app/img/banner/banner-2/banner4.jpg"/></a>
                            <div class="banner-look"><span>Get the look</span>
                                <h2>Festive Looks</h2><img style={{"width": "174px"}} alt="Look" src="https://vue-plum-chi.vercel.app/img/icon/look.png"/>
                                <p>Your delivery of outfit ideas, updated daily</p><a class="btn theme-btn" href="/shop">discover</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerHome4;