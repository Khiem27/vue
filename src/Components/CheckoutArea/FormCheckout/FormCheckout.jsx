import React, { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

// Mảng quốc gia
const options = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];

FormCheckout.propTypes = {};

function FormCheckout(props) {
  const products = useSelector((state) => state.addToCart.products);
  const productsTotal = useSelector((state) => state.addToCart.cartTotal);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a3n51df",
        "template_5boib6f",
        form.current,
        "Gg038JJonzeHN7fGw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div class="row">
        <div class="col-lg-6">
          <div class="checkbox-form">
            <h3>Billing Details</h3>
            <div class="row">
              <div class="col-md-12">
                <div class="country-select">
                  <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{ width: "100%" }}
                    renderInput={(params) => (
                      <TextField {...params} name="countries" label="Country" />
                    )}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label for="fName">
                    First Name <span class="required">*</span>
                  </label>
                  <input type="text" id="fName" name="fName" class="mb-0" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label for="lName">
                    Last Name <span class="required">*</span>
                  </label>
                  <input type="text" id="lName" name="lName" class="mb-0" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label for="cName">
                    Company Name <span class="required">*</span>
                  </label>
                  <input type="text" id="cName" name="cName" class="mb-0" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label for="address">
                    Address <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Street address"
                    class="mb-0"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    name="asuo"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label for="city">
                    Town / City <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Town / City"
                    class="mb-0"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label for="state">
                    State / County <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State / County"
                    class="mb-0"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label for="zip">
                    Postcode / Zip <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Postcode / Zip"
                    class="mb-0"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label for="email">
                    Email Address <span class="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" class="mb-0" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label for="phone">
                    Phone <span class="required">*</span>
                  </label>
                  <input type="text" id="phone" name="phone" class="mb-0" />
                </div>
              </div>
              <div class="col-md-12"></div>
            </div>
            <div class="different-address">
              <div class="order-notes">
                <div class="checkout-form-list">
                  <label>Order Notes</label>
                  <textarea
                    id="checkout-mess"
                    cols="30"
                    rows="10"
                    name="note"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <Typography
                    sx={{
                      width: "100%",
                      fontSize: "14px",
                      fontFamily: "Rubik,sans-serif",
                      color: "#444444",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    Direct Bank Transfer
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderTop: "1px solid #b6b6b6" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "#10111e",
                    }}
                  >
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
                  <Typography
                    sx={{
                      width: "100%",
                      fontSize: "14px",
                      fontFamily: "Rubik,sans-serif",
                      color: "#444444",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    Cheque Payment
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderTop: "1px solid #b6b6b6" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "#10111e",
                    }}
                  >
                    Please send your cheque to Store Name, Store Street, Store
                    Town, Store State / County, Store Postcode.
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
                  <Typography
                    sx={{
                      width: "100%",
                      fontSize: "14px",
                      fontFamily: "Rubik,sans-serif",
                      color: "#444444",
                      fontStyle: "normal",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    PayPal
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderTop: "1px solid #b6b6b6" }}>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "#10111e",
                    }}
                  >
                    Pay via PayPal; you can pay with your credit card if you
                    don’t have a PayPal account.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <div class="order-button-payment mt-20">
                <button type="submit" value="Send" class="btn theme-btn">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormCheckout;
