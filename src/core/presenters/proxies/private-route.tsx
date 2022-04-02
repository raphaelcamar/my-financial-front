import React from 'react';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { Navigate } from './navigate';

export const PrivateRoute: React.FC = ({ children }) => {
  const { verifyUserAuth } = useAccessAndAuthContext();

  const verifyUser = () => {
    const user = verifyUserAuth();
    if (!user) return <Navigate to="/login" />;

    return children;
  };

  return <>{verifyUser()}</>;
};
