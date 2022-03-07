import React from "react";

ContactsMap.propTypes = {};

function ContactsMap(props) {
  return (
    <section class="map-area">
      <div id="contact-map" class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2512067577027!2d106.72963911458918!3d10.792062192310917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526068f53b349%3A0x8e1091a78fa2c77b!2zQ8ahIHPhu58gMiAtIEvDvSB0w7pjIHjDoSBUcsaw4budbmcgxJDhuqFpIGjhu41jIEdpYW8gdGjDtG5nIHbhuq1uIHThuqNpIFRwLkjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1646307622449!5m2!1svi!2s"
          loading="lazy"
          allowfullscreen=""
          style={{ border: 0, width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </section>
  );
}

export default ContactsMap;
