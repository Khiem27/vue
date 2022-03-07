import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

FormOrder.propTypes = {};

function FormOrder(props) {
  const products = useSelector((state) => state.addToCart.products);
  const productsTotal = useSelector((state) => state.addToCart.cartTotal);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div class="col-lg-6">
      <div class="your-order mb-30 ">
        <h3>Your order</h3>
        <div class="your-order-table table-responsive">
          <table>
            <thead>
              <tr>
                <th class="product-name">Product</th>
                <th class="product-total">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length
                ? products.map((item, index) => {
                    return (
                      <tr class="cart_item">
                        <td class="product-name">
                          {item.title}
                          <strong class="product-quantity">
                            {" "}
                            × {item.quantity}
                          </strong>
                        </td>
                        <td class="product-total">
                          <span class="amount">${item.price}</span>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr class="cart-subtotal">
                <th>Cart Subtotal</th>
                <td>
                  <span class="amount">${productsTotal}</span>
                </td>
              </tr>
              <tr class="shipping">
                <th>Shipping</th>
                <td>
                  <ul>
                    <li>
                      <input type="checkbox" id="flat" />{" "}
                      <label for="flat">
                        Flat Rate: <span class="amount">$7.00</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="shipping" />{" "}
                      <label for="shipping">Free Shipping: $30.00</label>
                    </li>
                    <li></li>
                  </ul>
                </td>
              </tr>
              <tr class="order-total">
                <th>Order Total</th>
                <td>
                  <strong>
                    <span class="amount">${productsTotal}</span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="payment-method">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "100%", "fontSize":"14px", "fontFamily":"Rubik,sans-serif", color: "#444444", "fontStyle":"normal", "fontWeight": "500", "textTransform":"uppercase", flexShrink: 0 }}>
                Direct Bank Transfer
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{"borderTop":"1px solid #b6b6b6"}}>
              <Typography sx={{"fontSize":"14px","lineHeight":"1.5","color":"#10111e"}}>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have cleared in our account.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "100%", "fontSize":"14px", "fontFamily":"Rubik,sans-serif", color: "#444444", "fontStyle":"normal", "fontWeight": "500", "textTransform":"uppercase", flexShrink: 0 }}>
                Cheque Payment
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{"borderTop":"1px solid #b6b6b6"}}>
              <Typography sx={{"fontSize":"14px","lineHeight":"1.5","color":"#10111e"}}>
                Please send your cheque to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "100%", "fontSize":"14px", "fontFamily":"Rubik,sans-serif", color: "#444444", "fontStyle":"normal", "fontWeight": "500", "textTransform":"uppercase", flexShrink: 0 }}>
                PayPal
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{"borderTop":"1px solid #b6b6b6"}}> 
              <Typography sx={{"fontSize":"14px","lineHeight":"1.5","color":"#10111e"}}>
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div class="order-button-payment mt-20">
            <button type="submit" class="btn theme-btn">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormOrder;
