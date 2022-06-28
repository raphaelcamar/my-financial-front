import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const CloseEyeIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="22" height="9" viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1C1 1 4.5 5 11 5C17.5 5 21 1 21 1M3 2.645L1 5M21 5L19.004 2.648M7.914 4.68L7 7.5M14.063 4.688L15 7.5"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CloseEyeIcon;
