import React from 'react';

UpcomingProduct2.propTypes = {
    
};

function UpcomingProduct2(props) {
    return (
      <section className='upcoming-product-area pos-relative box-90 pt-120 pb-120' style={{"backgroundImage":"url(\"https://vue-plum-chi.vercel.app/img/bg/bg2.jpg\")"}}>
          <div className="upc-shape d-none d-xl-block">
                    <div className="bakix-marker map-c1 map-c11">
                        <div className="bakix-map-icon"><i className="fas fa-plus"></i></div>
                        <div className="bakix-map-address">
                            <p>New York <br /> 25632 Bern, 254 Strasse  </p>
                        </div>
                    </div>
                    <div className="bakix-marker map-c2 map-c22">
                        <div className="bakix-map-icon"><i className="fas fa-plus"></i></div>
                        <div className="bakix-map-address">
                            <p>India <br /> 25632 Bern, 254 Strasse  </p>
                        </div>
                    </div>
                    <div className="bakix-marker map-c3 map-c33">
                        <div className="bakix-map-icon"><i className="fas fa-plus"></i></div>
                        <div className="bakix-map-address">
                            <p>India <br /> 25632 Bern, 254 Strasse  </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-6">
                            <div className="upcoming-product">
                                <div className="upc-price">$500.00</div>
                                <h1><a href="/product-details">Lodge Flush Mount</a></h1>
                                <ul className="upc-pro-info fix">
                                    <li className="d-flex"><i className="fas fa-layer-group"></i>
                                        <div className="upc-info">
                                            <h4>Origin From</h4><span>Sweden</span></div>
                                    </li>
                                    <li className="d-flex"><i className="fas fa-layer-group"></i>
                                        <div className="upc-info">
                                            <h4>Material</h4><span>Aluminum</span></div>
                                    </li>
                                    <li className="d-flex"><i className="fas fa-layer-group"></i>
                                        <div className="upc-info">
                                            <h4>Designer</h4><span>Basictheme</span></div>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                                <div className="upc-btn"><a className="btn theme-btn" data-animation="fadeInLeft" data-delay=".7s" href="/shop">shop now</a><a className="btn white-btn" data-animation="fadeInRight" data-delay=".9s" href="/shop">Details</a></div>
                                <div className="event-timer">
                                    <div className="mt-40" data-countdown="2019/04/01"><span className="cdown days"><span className="time-count">0</span>
                                        <p>Days</p>
                                        </span> <span className="cdown hour"><span className="time-count">0</span>
                                        <p>Hour</p>
                                        </span> <span className="cdown minutes"><span className="time-count">00</span>
                                        <p>Min</p>
                                        </span> <span className="cdown second"> <span><span className="time-count">00</span>
                                        <p>Sec</p>
                                        </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </section>
    );
}

export default UpcomingProduct2;