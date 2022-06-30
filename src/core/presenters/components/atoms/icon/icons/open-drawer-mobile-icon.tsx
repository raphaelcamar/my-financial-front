import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const OpenDrawerMobileIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 7.5H23V10.5H0V7.5ZM0 0H23V3H0V0ZM0 18H23V15H0V18Z" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default OpenDrawerMobileIcon;
