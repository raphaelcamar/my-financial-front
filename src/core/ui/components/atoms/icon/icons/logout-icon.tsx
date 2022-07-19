import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const LogoutIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.77778C0 0.8 0.799822 0 1.77738 0H8.88691V1.77778H1.77738V14.2222H8.88691V16H1.77738C0.799822 16 0 15.2 0 14.2222V1.77778ZM12.5981 7.11111L10.3444 4.85689L11.601 3.6L16 8L11.601 12.4L10.3444 11.1431L12.5981 8.88889H6.74517V7.11111H12.5981Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default LogoutIcon;
