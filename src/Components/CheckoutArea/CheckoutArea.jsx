import React from "react";
import FormCheckout from "./FormCheckout/FormCheckout";

CheckoutArea.propTypes = {};

function CheckoutArea(props) {
  return (
    <section className="checkout-area pb-70">
      <div className="container">
        <FormCheckout />
      </div>
    </section>
  );
}

export default CheckoutArea;
