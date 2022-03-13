import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const PrivateRoute: React.FC = ({ children }) => {
  const { verifyUserAuth } = useAccessAndAuthContext();

  const verifyUser = () => {
    const user = verifyUserAuth();
    if (!user) return <Navigate to="/login" />;

    return children;
  };

  return <>{verifyUser()}</>;
};
