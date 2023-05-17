import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const LogoutIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3603)">
        <path
          d="M0 1.11111C0 0.5 0.499889 0 1.11086 0H5.55432V1.11111H1.11086V8.88888H5.55432V10H1.11086C0.499889 10 0 9.5 0 8.88888V1.11111ZM7.87381 4.44444L6.46525 3.03556L7.25062 2.25L10 5L7.25062 7.75L6.46525 6.96444L7.87381 5.55556H4.21573V4.44444H7.87381Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3603">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoutIcon;
