import { Contacts } from 'components/Contacts/Contacts';
import { ContactsFilter } from 'components/Contacts/ContactsFilter';
import { PhoneBookForm } from 'components/PhoneBookForm/PhoneBookForm';
import React, { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchContacts(signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);
  return (
    <div style={{ width: '100%', marginTop: '70px' }}>
      <h2
        style={{
          display: 'block',
          width: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        Phonebook
      </h2>
      <PhoneBookForm />
      <h2
        style={{
          display: 'block',
          width: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        Contacts
      </h2>
      <ContactsFilter />
      <Contacts />
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="loading"
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          wrapperClassName
        />
      )}
    </div>
  );
};
