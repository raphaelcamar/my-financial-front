import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAccessContext } from '@/user/presenters/contexts/access';
import { Navigate } from './navigate';

export const PublicRoute: React.FC = ({ children }) => {
  const { user } = useAccessContext();
  const location = useLocation();

  const verifyUser = () => {
    if (user) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
  };

  return <>{verifyUser()}</>;
};
