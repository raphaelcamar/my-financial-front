import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const PrivateRoute: React.FC = ({ children }) => {
  const { verifyUserAuth } = useAccessAndAuthContext();
  const navigate = useNavigate();

  const verifyUser = () => {
    const user = verifyUserAuth();
    if (!user) navigate('/login');

    return children;
  };

  return <>{verifyUser()}</>;
};
