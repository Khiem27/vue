import React from 'react';

SpecialFeatues.propTypes = {
    
};

function SpecialFeatues(props) {
    return (
        <section className="features-area box-90">
            <div className="container-fluid">
                <div className="theme-soft-bg fix pt-100 pb-50">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="area-title text-center mb-50">
                                <h2>Special Features</h2>
                                <p>Get special services from our shop.</p>
                            </div>
                        </div>
                    </div>
                    <div className="features">
                        <div className="single-seatures width-20 mb-50 text-center"><i className="fas fa-luggage-cart"></i><span>Free Delivery</span>
                            <h3>Free Delivery</h3></div>
                        <div className="single-seatures width-20 mb-50 text-center"><i className="fab fa-gratipay"></i><span>100% CUSTOMER</span>
                            <h3>Feedbacks</h3></div>
                        <div className="single-seatures width-20 mb-50 text-center"><i className="fas fa-cart-arrow-down"></i><span>10 DAYS</span>
                            <h3>For Free Return</h3></div>
                        <div className="single-seatures width-20 mb-50 text-center"><i className="fas fa-coins"></i><span>PAYMENT</span>
                            <h3>Secure System     </h3></div>
                        <div className="single-seatures width-20 mb-50 text-center"><i className="fas fa-headset"></i><span>24/7</span>
                            <h3>Online Supports</h3></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialFeatues;