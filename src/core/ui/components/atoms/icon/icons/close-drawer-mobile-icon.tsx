import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const CloseDrawerMobileIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 4.35207H7.5V5.64837H0V4.35207ZM0 1.11133H10V2.40762H0V1.11133ZM0 8.88911H4.52189V7.59281H0V8.88911Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default CloseDrawerMobileIcon;
