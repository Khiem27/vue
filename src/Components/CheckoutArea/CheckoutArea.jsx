import React from "react";
import PropTypes from "prop-types";
import FormCheckout from "./FormCheckout/FormCheckout";
import FormOrder from "./FormOrder/FormOrder";

CheckoutArea.propTypes = {};

function CheckoutArea(props) {
  return (
    <section class="checkout-area pb-70">
      <div class="container">
        <FormCheckout />
      </div>
    </section>
  );
}

export default CheckoutArea;
