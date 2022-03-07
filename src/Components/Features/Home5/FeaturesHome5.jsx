import React from 'react';

FeaturesHome5.propTypes = {
    
};

function FeaturesHome5(props) {
    return (
        <section class="features-area box-90">
            <div class="container">
                <div class="theme-soft-bg fix pt-100 pb-50">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="area-title text-center mb-50">
                                <h2>Special Features</h2>
                                <p>Get special services from our shop.</p>
                            </div>
                        </div>
                    </div>
                    <div class="service-bg" data-background="https://vue-plum-chi.vercel.app/img/bg/servie-pattern.png" style={{"backgroundImage":"url(https://vue-plum-chi.vercel.app/img/bg/servie-pattern.png)"}}>
                        <div class="row">
                            <div class="col-xl-4  col-lg-4 col-md-6  ">
                                <div class="single-seatures mb-50  text-center"><i class="fas fa-luggage-cart"></i><span>Free Delivery</span>
                                    <h3>Free Delivery</h3></div>
                            </div>
                            <div class="col-xl-4  col-lg-4 col-md-6  ">
                                <div class="single-seatures mb-50  text-center"><i class="fas fa-heartbeat"></i><span>100% CUSTOMER</span>
                                    <h3>Feedbacks</h3></div>
                            </div>
                            <div class="col-xl-4  col-lg-4 col-md-6  ">
                                <div class="single-seatures mb-50  text-center"><i class="fas fa-cart-arrow-down"></i><span>10 DAYS</span>
                                    <h3>For Free Return</h3></div>
                            </div>
                            <div class="col-xl-4  col-lg-4 col-md-6 offset-xl-2 ">
                                <div class="single-seatures mb-50  text-center"><i class="fas fa-coins"></i><span>PAYMENT</span>
                                    <h3>Secure System     </h3></div>
                            </div>
                            <div class="col-xl-4  col-lg-4 col-md-6  d-md-none d-lg-none">
                                <div class="single-seatures mb-50  text-center"><i class="fas fa-coins"></i><span>24/7</span>
                                    <h3>Online Supports</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesHome5;