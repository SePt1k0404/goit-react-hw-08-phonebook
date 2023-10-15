import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

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

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={style}>
      <Typography
        style={{ display: 'flex', justifyContent: 'center' }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        Log in
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
            Email
            <input
              style={{
                marginLeft: '40px',
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
                marginLeft: '10px',
                borderColor: 'transparent',
                borderRadius: '10px',
                padding: '5px',
              }}
              type="password"
              name="password"
            />
          </label>
          <Button variant="contained" color="success" type="submit">
            Log In
          </Button>
        </form>
      </Typography>
    </Box>
  );
};
