import { useEffect } from 'react';
import type { NavigateProps } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navigate: React.FC<NavigateProps> = ({ to, replace, state }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace, state });
  }, [navigate, to, replace, state]);

  return null;
};
