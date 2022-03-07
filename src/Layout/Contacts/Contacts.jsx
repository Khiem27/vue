import React from "react";
import ContactsArea from "../../Components/ContactsArea/ContactsArea";
import FooterHome from "../../Components/Footer/FooterHome";
import ContactsForm from "../../Components/Form/Contacts/ContactsForm";
import Header from "../../Components/Header/Header";
import ContactsMap from "../../Components/Map/Contacts/ContactsMap";
import ContactsTitle from "../../Components/PageTitle/Contacts/ContactsTitle";

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
