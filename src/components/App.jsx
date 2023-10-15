import { useAuth } from 'hooks/useAuth';
import { ContactsPage } from 'pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Login />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        />
      </Route>
    </Routes>
  );
};
