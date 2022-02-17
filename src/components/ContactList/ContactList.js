import React from "react";
import PropTypes from "prop-types";
import s from './ContactList.module.css'

function ContactList({ contacts, onDeleteContact }) {
    // console.log(contacts)
    return(
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li className={s.contact} key={id}>
                    {name}: {number}
                    <button className={s.button} onClick={() => onDeleteContact(id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
  ),
    onDeleteContact: PropTypes.func,
};

export default ContactList;