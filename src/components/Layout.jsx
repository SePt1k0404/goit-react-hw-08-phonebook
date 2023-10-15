import { useAuth } from 'hooks/useAuth';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthNav } from './authNav/authNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && <Navigation />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
