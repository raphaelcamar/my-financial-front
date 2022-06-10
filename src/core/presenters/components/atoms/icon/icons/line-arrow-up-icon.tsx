import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const LineArrowUpIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="12" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 5.375L5 1L8 5.375M5 11V1V11Z"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LineArrowUpIcon;
