import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const LineArrowDownIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="11" height="15" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.98828 6.625L4.07559 11L1.1629 6.625M4.07559 1L4.07559 11L4.07559 1Z"
        stroke={color || theme.palette.primary.main}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LineArrowDownIcon;
