import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const TransactionIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3653)">
        <path
          d="M2.31486 0.526367V9.47374M2.31486 0.526367L4.10434 2.51467M2.31486 0.526367L0.525391 2.51467M7.68329 9.47374V0.526367M7.68329 9.47374L9.47276 7.48542M7.68329 9.47374L5.89381 7.48542"
          stroke={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3653">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TransactionIcon;
