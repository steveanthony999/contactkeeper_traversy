// Pull in the contacts from the state into here then map through them, create a list, and output a contact item for each one

import React, { useContext, Fragment } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact.</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
