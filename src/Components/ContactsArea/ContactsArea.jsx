import React from "react";
import PropTypes from "prop-types";

ContactsArea.propTypes = {};

function ContactsArea(props) {
  return (
    <section
      class="contact-area pt-120 pb-90"
      data-background="https://vue-plum-chi.vercel.app/assets/img/bg/bg-map.png"
      style={{
        backgroundImage:
          "url(https://vue-plum-chi.vercel.app/assets/img/bg/bg-map.png)",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4">
            <div class="contact text-center mb-30">
              <i class="fas fa-envelope"></i>
              <h3>Mail Here</h3>
              <p>Admin@BasicTheme.com</p>
              <p>Info@Themepur.com</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4">
            <div class="contact text-center mb-30">
              <i class="fas fa-map-marker-alt"></i>
              <h3>Visit Here</h3>
              <p>
                27 Division St, New York, NY 10002, Jaklina, United Kingpung
              </p>
            </div>
          </div>
          <div class="col-xl-4  col-lg-4 col-md-4 ">
            <div class="contact text-center mb-30">
              <i class="fas fa-phone"></i>
              <h3>Call Here</h3>
              <p>+8 (123) 985 789</p>
              <p>+787 878897 87</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsArea;
