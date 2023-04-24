import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const BellBallIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.1932 23.7564V24.6496C19.1932 25.5971 18.8228 26.5058 18.1634 27.1758C17.5041 27.8458 16.6098 28.2222 15.6774 28.2222C14.7449 28.2222 13.8506 27.8458 13.1913 27.1758C12.532 26.5058 12.1615 25.5971 12.1615 24.6496V23.7564M25.1085 21.9383C23.6978 20.1838 22.7018 19.2906 22.7018 14.4536C22.7018 10.024 20.4759 8.44593 18.6438 7.67949C18.4005 7.57789 18.1714 7.34455 18.0972 7.09056C17.7759 5.97913 16.8749 5 15.6774 5C14.4798 5 13.5783 5.97969 13.2602 7.09167C13.1861 7.34846 12.957 7.57789 12.7136 7.67949C10.8794 8.44705 8.65561 10.0196 8.65561 14.4536C8.65286 19.2906 7.65689 20.1838 6.24617 21.9383C5.66167 22.6651 6.17366 23.7564 7.19599 23.7564H24.1642C25.181 23.7564 25.6897 22.6617 25.1085 21.9383Z"
        stroke={color || theme.palette.grey[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="21"
        cy="9"
        r="3.5"
        fill={color || theme.palette.grey[400]}
        stroke={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default BellBallIcon;
