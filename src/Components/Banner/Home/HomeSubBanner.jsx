import React from 'react';

HomeSubBanner.propTypes = {
    
};

function HomeSubBanner(props) {
    return (
<section className="banner-area pt-30 pl-15 pr-15">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="banner mb-30">
                                <a href="/shop"><img src="https://vue-plum-chi.vercel.app/img/banner/banner-1/banner1.jpg" alt="announcement"/></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="banner mb-30">
                                <a href="/shop"><img src="https://vue-plum-chi.vercel.app/img/banner/banner-1/banner2.jpg" alt="announcement"/></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="banner mb-30">
                                <a href="/shop"><img src="https://vue-plum-chi.vercel.app/img/banner/banner-1/banner3.jpg" alt="announcement"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default HomeSubBanner;