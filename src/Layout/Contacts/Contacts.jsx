import React from "react";
import PropTypes from "prop-types";
import Header from "../../Components/Header/Header";
import ContactsTitle from "../../Components/PageTitle/Contacts/ContactsTitle";
import ContactsArea from "../../Components/ContactsArea/ContactsArea";
import ContactsForm from "../../Components/Form/Contacts/ContactsForm";
import ContactsMap from "../../Components/Map/Contacts/ContactsMap";
import FooterHome from "../../Components/Footer/FooterHome";

Contacts.propTypes = {};

function Contacts(props) {
  return (
    <>
      <Header />
      <main>
        <ContactsTitle />
        <ContactsArea />
        <ContactsForm />
        <ContactsMap />
      </main>
      <FooterHome />
    </>
  );
}

export default Contacts;
