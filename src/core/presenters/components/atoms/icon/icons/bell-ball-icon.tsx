import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const BellBallIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();

  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8769 21.1283V22.1026C15.8769 23.1363 15.4686 24.1276 14.7418 24.8585C14.015 25.5895 13.0292 26.0001 12.0014 26.0001C10.9735 26.0001 9.98778 25.5895 9.26098 24.8585C8.53418 24.1276 8.12587 23.1363 8.12587 22.1026V21.1283M22.3974 19.1449C20.8424 17.2309 19.7445 16.2565 19.7445 10.9797C19.7445 6.14752 17.2908 4.42595 15.2713 3.58982C15.0031 3.47899 14.7506 3.22444 14.6688 2.94736C14.3146 1.73489 13.3215 0.666748 12.0014 0.666748C10.6813 0.666748 9.68758 1.7355 9.33697 2.94858C9.25522 3.2287 9.00271 3.47899 8.73445 3.58982C6.71253 4.42716 4.26127 6.14265 4.26127 10.9797C4.25824 16.2565 3.16039 17.2309 1.60534 19.1449C0.96104 19.9377 1.52541 21.1283 2.65233 21.1283H21.3565C22.4773 21.1283 23.0381 19.9341 22.3974 19.1449Z"
        stroke={color || theme.palette.grey[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="6" r="6" fill={color || theme.palette.grey[400]} />
    </svg>
  );
};
export default BellBallIcon;
