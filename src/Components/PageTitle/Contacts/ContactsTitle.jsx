import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

ContactsTitle.propTypes = {};

function ContactsTitle(props) {
  return (
    <div
      className="breadcrumb-area"
      style={{
        backgroundImage:
          "url(https://vue-plum-chi.vercel.app/img/bg/page-title.png)",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-text text-center">
              <h1 class="">Contacts</h1>
              <ul class="breadcrumb-menu">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <span>Cart</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsTitle;
