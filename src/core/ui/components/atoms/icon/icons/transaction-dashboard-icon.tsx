import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const TransactionDashboardIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="7" fill={color || theme.palette.grey[400]} />
      <rect x="2" y="13" width="11" height="7" fill={color || theme.palette.grey[400]} />
      <rect x="15" y="13" width="7" height="7" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default TransactionDashboardIcon;
