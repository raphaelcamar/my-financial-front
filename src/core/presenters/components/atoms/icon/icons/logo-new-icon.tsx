import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const LogoNewIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="9" fill={color || theme.palette.grey[400]} />
      <circle cx="32" cy="9" r="8.5" stroke={color || theme.palette.grey[400]} />
      <rect width="18" height="18" fill={color || theme.palette.grey[400]} />
      <rect x="0.5" y="23.5" width="17" height="17" stroke={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default LogoNewIcon;
