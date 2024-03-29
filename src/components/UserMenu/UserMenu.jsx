import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          padding: '5px',
          backgroundColor: 'darkblue',
          borderRadius: '5px',
        }}
      >
        Welcome, {user.name}
      </p>
      <Button
        variant="contained"
        color="success"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
