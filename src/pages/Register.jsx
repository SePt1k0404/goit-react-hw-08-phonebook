import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1976d2',
  color: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={style}>
      <Typography
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '15px',
        }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Register
      </Typography>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Username
          <input
            style={{
              marginLeft: '17px',
              borderColor: 'transparent',
              borderRadius: '10px',
              padding: '5px',
            }}
            type="text"
            name="name"
          />
        </label>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Email
          <input
            style={{
              marginLeft: '50px',
              borderColor: 'transparent',
              borderRadius: '10px',
              padding: '5px',
            }}
            type="email"
            name="email"
          />
        </label>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Password
          <input
            style={{
              marginLeft: '22px',
              borderColor: 'transparent',
              borderRadius: '10px',
              padding: '5px',
            }}
            type="password"
            name="password"
          />
        </label>
        <Button variant="contained" color="success" type="submit">
          Register
        </Button>
      </form>
    </Box>
  );
};
