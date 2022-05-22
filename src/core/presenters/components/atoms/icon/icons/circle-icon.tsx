import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const CircleIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="442" height="442" viewBox="0 0 442 442" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="221" cy="221" r="221" fill={color || theme.palette.grey[300]} />
    </svg>
  );
};
export default CircleIcon;
