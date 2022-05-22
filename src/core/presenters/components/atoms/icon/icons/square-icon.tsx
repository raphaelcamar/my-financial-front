import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const SquareIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="442" height="442" viewBox="0 0 442 442" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="442" height="442" fill={color || theme.palette.grey[300]} />
    </svg>
  );
};
export default SquareIcon;
