import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const LineArrowUpIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="11" height="14" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.68555 5.375L4.6118 1L7.53806 5.375M4.6118 11V1V11Z"
        stroke={color || theme.palette.primary.main}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LineArrowUpIcon;
