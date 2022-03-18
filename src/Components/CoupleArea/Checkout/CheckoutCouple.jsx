import React from "react";
import {
    Link
} from "react-router-dom";
CheckoutCouple.propTypes = {};

function CheckoutCouple(props) {
  return (
    <section className="coupon-area pt-100 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Returning customer?{" "}
                <span id="showlogin">Click here to login</span>
              </h3>
              <div className="custom-acc ">
                <div id="checkout-login" className="coupon-content ">
                  <div className="coupon-info">
                    <p className="coupon-text">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    <form>
                      <p className="form-row-first">
                        <label htmlFor="email">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          type="string"
                          name="email"
                          placeholder="Enter Username or Email address..."
                          className="mb-0"
                          value=""
                        />
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp mb-3"
                          style={{"display": "block"}}
                        ></div>
                      </p>
                      <p className="form-row-last">
                        <label htmlFor="password">
                          Password <span className="required">*</span>
                        </label>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Enter password..."
                          className="mb-0"
                          value=""
                        />
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp mb-3"
                          style={{"display": "block"}}
                        ></div>
                      </p>
                      <p className="form-row">
                        <button className="btn theme-btn">Login</button>
                        <label>
                          <input type="checkbox" />
                          Remember me
                        </label>
                      </p>
                      <p className="lost-password">
                        <Link >Lost your password?</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="coupon-accordion">
              <h3>
                Have a coupon?{" "}
                <span id="showcoupon">Click here to enter your code</span>
              </h3>
              <div className="custom-acc ">
                <div id="checkout_coupon" className="coupon-checkout-content">
                  <div className="coupon-info">
                    <form>
                      <p className="checkout-coupon">
                        <input
                          className="mb-0"
                          type="text"
                          name="coupon"
                          placeholder="Coupon Code"
                          value=""
                        />
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp mb-3"
                          style={{"display": "block"}}
                        ></div>
                        <button className="btn theme-btn" type="submit">
                          Apply Coupon
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutCouple;
