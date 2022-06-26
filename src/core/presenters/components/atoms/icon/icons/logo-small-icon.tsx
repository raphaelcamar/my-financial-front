import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const LogoSmallIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);
  return (
    <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.31697 12.7278C5.78604 11.7772 4.65054 10.7944 4.65054 9.26389C4.65054 7.50778 6.22157 6.28333 8.85032 6.28333C11.6191 6.28333 12.6457 7.65278 12.739 9.66667H16.1766C16.0677 6.89556 14.4345 4.35 11.1835 3.52833V0H6.51711V3.48C3.49949 4.15667 1.07295 6.18667 1.07295 9.29611C1.07295 13.0178 4.04391 14.8706 8.38368 15.95C12.2724 16.9167 13.0501 18.3344 13.0501 19.8328C13.0501 20.9444 12.2879 22.7167 8.85032 22.7167C5.64605 22.7167 4.38611 21.2344 4.21501 19.3333H0.792969C0.979626 22.8617 3.5306 24.8433 6.51711 25.5039V29H11.1835V25.5361C14.2167 24.94 16.6277 23.1194 16.6277 19.8167C16.6277 15.2411 12.8479 13.6783 9.31697 12.7278Z"
        fill={color || theme.palette.grey[400]}
      />
    </svg>
  );
};
export default LogoSmallIcon;
