import React from 'react';

export const HomePage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
      }}
    >
      <p
        style={{
          width: '600px',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '20px',
        }}
      >
        Hello 🙋‍♂️, this is the "Phone book app", where you can record a person's
        name👤 and phone number☎️. Have a nice day🥰!
      </p>
    </div>
  );
};
