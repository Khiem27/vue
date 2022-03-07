import React from "react";
import FormCheckout from "./FormCheckout/FormCheckout";

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
