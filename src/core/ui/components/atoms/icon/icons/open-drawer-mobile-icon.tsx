import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const OpenDrawerMobileIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 4.20513H10V5.48718H0V4.20513ZM0 1H10V2.28205H0V1ZM0 8.69231H10V7.41026H0V8.69231Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default OpenDrawerMobileIcon;
