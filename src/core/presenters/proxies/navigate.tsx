import { useEffect } from 'react';
import { NavigateProps, useNavigate } from 'react-router';

export const Navigate: React.FC<NavigateProps> = ({ to, replace, state }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace, state });
  }, []);

  return null;
};
