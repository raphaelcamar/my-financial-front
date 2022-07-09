import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const CloseDrawerMobileIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 8.75H20.25V12.25H0V8.75ZM0 0H27V3.5H0V0ZM0 21H12.2091V17.5H0V21Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default CloseDrawerMobileIcon;
