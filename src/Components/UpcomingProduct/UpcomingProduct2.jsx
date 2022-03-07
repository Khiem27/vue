import React from 'react';

UpcomingProduct2.propTypes = {
    
};

function UpcomingProduct2(props) {
    return (
      <section className='upcoming-product-area pos-relative box-90 pt-120 pb-120' style={{"backgroundImage":"url(\"https://vue-plum-chi.vercel.app/img/bg/bg2.jpg\")"}}>
          <div class="upc-shape d-none d-xl-block">
                    <div class="bakix-marker map-c1 map-c11">
                        <div class="bakix-map-icon"><i class="fas fa-plus"></i></div>
                        <div class="bakix-map-address">
                            <p>New York <br /> 25632 Bern, 254 Strasse  </p>
                        </div>
                    </div>
                    <div class="bakix-marker map-c2 map-c22">
                        <div class="bakix-map-icon"><i class="fas fa-plus"></i></div>
                        <div class="bakix-map-address">
                            <p>India <br /> 25632 Bern, 254 Strasse  </p>
                        </div>
                    </div>
                    <div class="bakix-marker map-c3 map-c33">
                        <div class="bakix-map-icon"><i class="fas fa-plus"></i></div>
                        <div class="bakix-map-address">
                            <p>India <br /> 25632 Bern, 254 Strasse  </p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-6 offset-xl-6">
                            <div class="upcoming-product">
                                <div class="upc-price">$500.00</div>
                                <h1><a href="/product-details">Lodge Flush Mount</a></h1>
                                <ul class="upc-pro-info fix">
                                    <li class="d-flex"><i class="fas fa-layer-group"></i>
                                        <div class="upc-info">
                                            <h4>Origin From</h4><span>Sweden</span></div>
                                    </li>
                                    <li class="d-flex"><i class="fas fa-layer-group"></i>
                                        <div class="upc-info">
                                            <h4>Material</h4><span>Aluminum</span></div>
                                    </li>
                                    <li class="d-flex"><i class="fas fa-layer-group"></i>
                                        <div class="upc-info">
                                            <h4>Designer</h4><span>Basictheme</span></div>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                                <div class="upc-btn"><a class="btn theme-btn" data-animation="fadeInLeft" data-delay=".7s" href="/shop">shop now</a><a class="btn white-btn" data-animation="fadeInRight" data-delay=".9s" href="/shop">Details</a></div>
                                <div class="event-timer">
                                    <div class="mt-40" data-countdown="2019/04/01"><span class="cdown days"><span class="time-count">0</span>
                                        <p>Days</p>
                                        </span> <span class="cdown hour"><span class="time-count">0</span>
                                        <p>Hour</p>
                                        </span> <span class="cdown minutes"><span class="time-count">00</span>
                                        <p>Min</p>
                                        </span> <span class="cdown second"> <span><span class="time-count">00</span>
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