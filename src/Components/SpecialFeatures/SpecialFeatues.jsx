import React from 'react';

SpecialFeatues.propTypes = {
    
};

function SpecialFeatues(props) {
    return (
        <section class="features-area box-90">
            <div class="container-fluid">
                <div class="theme-soft-bg fix pt-100 pb-50">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="area-title text-center mb-50">
                                <h2>Special Features</h2>
                                <p>Get special services from our shop.</p>
                            </div>
                        </div>
                    </div>
                    <div class="features">
                        <div class="single-seatures width-20 mb-50 text-center"><i class="fas fa-luggage-cart"></i><span>Free Delivery</span>
                            <h3>Free Delivery</h3></div>
                        <div class="single-seatures width-20 mb-50 text-center"><i class="fab fa-gratipay"></i><span>100% CUSTOMER</span>
                            <h3>Feedbacks</h3></div>
                        <div class="single-seatures width-20 mb-50 text-center"><i class="fas fa-cart-arrow-down"></i><span>10 DAYS</span>
                            <h3>For Free Return</h3></div>
                        <div class="single-seatures width-20 mb-50 text-center"><i class="fas fa-coins"></i><span>PAYMENT</span>
                            <h3>Secure System     </h3></div>
                        <div class="single-seatures width-20 mb-50 text-center"><i class="fas fa-headset"></i><span>24/7</span>
                            <h3>Online Supports</h3></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialFeatues;