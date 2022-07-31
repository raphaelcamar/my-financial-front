import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const TransactionIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.4 1V18M4.4 1L7.8 4.77778M4.4 1L1 4.77778M14.6 18V1M14.6 18L18 14.2222M14.6 18L11.2 14.2222"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TransactionIcon;
