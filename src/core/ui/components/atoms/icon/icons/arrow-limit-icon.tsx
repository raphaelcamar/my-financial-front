import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const ArrowLimitIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.37036 0H24.6296V3.875H1.37036V0ZM2.74072 22.6823L11.0617 14.3646V31H14.9383V14.3646L23.2593 22.6823L26 19.9427L13 6.94788L0 19.9427L2.74072 22.6823Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default ArrowLimitIcon;
