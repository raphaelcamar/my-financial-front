import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';

export const PrivateRoute: React.FC = ({ children }) => {
  const { verifyUserAuth } = useAccessAndAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const user = verifyUserAuth();
    if (!user) navigate('/login');
  }, [children]);

  return <>{children}</>;
};
