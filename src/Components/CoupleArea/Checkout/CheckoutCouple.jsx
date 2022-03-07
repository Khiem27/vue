import React from "react";
import {
  Link
} from "react-router-dom";
CheckoutCouple.propTypes = {};

function CheckoutCouple(props) {
  return (
    <section class="coupon-area pt-100 pb-30">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="coupon-accordion">
              <h3>
                Returning customer?{" "}
                <span id="showlogin">Click here to login</span>
              </h3>
              <div class="custom-acc ">
                <div id="checkout-login" class="coupon-content ">
                  <div class="coupon-info">
                    <p class="coupon-text">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    <form>
                      <p class="form-row-first">
                        <label for="email">
                          Email Address <span class="required">*</span>
                        </label>
                        <input
                          id="email"
                          type="string"
                          name="email"
                          placeholder="Enter Username or Email address..."
                          class="mb-0"
                          value=""
                        />
                        <div
                          id="val-username1-error"
                          class="invalid-feedback animated fadeInUp mb-3"
                          style={{"display": "block"}}
                        ></div>
                      </p>
                      <p class="form-row-last">
                        <label for="password">
                          Password <span class="required">*</span>
                        </label>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Enter password..."
                          class="mb-0"
                          value=""
                        />
                        <div
                          id="val-username1-error"
                          class="invalid-feedback animated fadeInUp mb-3"
                          style={{"display": "block"}}
                        ></div>
                      </p>
                      <p class="form-row">
                        <button class="btn theme-btn">Login</button>
                        <label>
                          <input type="checkbox" />
                          Remember me
                        </label>
                      </p>
                      <p class="lost-password">
                        <Link >Lost your password?</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="coupon-accordion">
              <h3>
                Have a coupon?{" "}
                <span id="showcoupon">Click here to enter your code</span>
              </h3>
              <div class="custom-acc ">
                <div id="checkout_coupon" class="coupon-checkout-content">
                  <div class="coupon-info">
                    <form>
                      <p class="checkout-coupon">
                        <input
                          class="mb-0"
                          type="text"
                          name="coupon"
                          placeholder="Coupon Code"
                          value=""
                        />
                        <div
                          id="val-username1-error"
                          class="invalid-feedback animated fadeInUp mb-3"
                          style={{"display": "block"}}
                        ></div>
                        <button class="btn theme-btn" type="submit">
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
