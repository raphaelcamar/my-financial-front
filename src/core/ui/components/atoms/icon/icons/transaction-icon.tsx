import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const TransactionIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 9C1 4.2 4.512 1 8.8448 1C12.3672 1 15.208 2.868 16.2 5.8M17 9C17 13.8 13.488 17 9.1552 17C5.6336 17 2.792 15.132 1.8 12.2L17 9Z"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 5.0001L16.2 5.8001L17 2.6001M5 13.0001L1.8 12.2001L1 15.4001L5 13.0001Z"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TransactionIcon;
