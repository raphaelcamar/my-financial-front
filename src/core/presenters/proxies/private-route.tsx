import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAccessAndAuthContext } from '@/access-and-auth/presenters/contexts';
import { Navigate } from './navigate';
import { availableRoutes } from '@/core/presenters/utils';

export const PrivateRoute: React.FC = ({ children }) => {
  const { user } = useAccessAndAuthContext();
  const location = useLocation();

  const verifyUser = () => {
    if (!user) {
      if (!availableRoutes.includes(location.pathname))
        return <Navigate to="/login" state={{ from: location }} replace />;
      return null;
    }
    return children;
  };

  return <>{verifyUser()}</>;
};
