import React from "react";
import PropTypes from "prop-types";

ContactsForm.propTypes = {};

function ContactsForm(props) {
  return (
    <section class="contact-form-area grey-bg pt-100 pb-100">
      <div class="container">
        <div class="form-wrapper">
          <div class="row align-items-center">
            <div class="col-xl-8 col-lg-8">
              <div class="section-title mb-55">
                <p>
                  <span></span> Anything On your Mind
                </p>
                <h1>Estimate Your Idea</h1>
              </div>
            </div>
            <div class="col-xl-4 col-lg-3 d-none d-xl-block ">
              <div class="section-link mb-80 text-right">
                <a class="btn theme-btn" href="#">
                  <i class="fas fa-phone"></i> make call
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form id="contact-form" action="#">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-box user-icon mb-30">
                    <input type="text" name="name" placeholder="Your Name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-box email-icon mb-30">
                    <input type="text" name="email" placeholder="Your Email" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-box phone-icon mb-30">
                    <input type="text" name="phone" placeholder="Your Phone" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-box subject-icon mb-30">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-box message-icon mb-30">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div class="contact-btn text-center">
                    <button class="btn theme-btn" type="submit">
                      get action
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p class="ajax-response text-center"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsForm;
