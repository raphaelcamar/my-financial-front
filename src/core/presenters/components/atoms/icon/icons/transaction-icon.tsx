import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const TransactionIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 11C1 5 5.39 1 10.806 1C15.209 1 18.76 3.335 20 7M21 11C21 17 16.61 21 11.194 21C6.792 21 3.24 18.665 2 15L21 11Z"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 6L20 7L21 3M6 16L2 15L1 19L6 16Z"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TransactionIcon;
