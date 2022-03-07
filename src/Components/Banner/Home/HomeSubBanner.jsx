import React from 'react';

HomeSubBanner.propTypes = {
    
};

function HomeSubBanner(props) {
    return (
<section class="banner-area pt-30 pl-15 pr-15">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="banner mb-30">
                                <a href="/shop"><img src="https://vue-plum-chi.vercel.app/img/banner/banner-1/banner1.jpg" alt="announcement"/></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="banner mb-30">
                                <a href="/shop"><img src="https://vue-plum-chi.vercel.app/img/banner/banner-1/banner2.jpg" alt="announcement"/></a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="banner mb-30">
                                <a href="/shop"><img src="https://vue-plum-chi.vercel.app/img/banner/banner-1/banner3.jpg" alt="announcement"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default HomeSubBanner;