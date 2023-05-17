import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const TransactionDashboardIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16732 1.6665H0.833984V4.58317H9.16732V1.6665Z" fill={color || theme.palette.grey[400]} />
      <path d="M5.41732 5.4165H0.833984V8.33317H5.41732V5.4165Z" fill={color || theme.palette.grey[400]} />
      <path d="M9.16667 5.4165H6.25V8.33317H9.16667V5.4165Z" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default TransactionDashboardIcon;
