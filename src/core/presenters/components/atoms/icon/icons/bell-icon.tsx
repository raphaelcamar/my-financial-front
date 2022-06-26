import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const BellIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);
  return (
    <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.4004 21.1283V22.1026C15.4004 23.1363 14.9963 24.1276 14.277 24.8586C13.5577 25.5895 12.5821 26.0001 11.5649 26.0001C10.5477 26.0001 9.57215 25.5895 8.85286 24.8586C8.13358 24.1276 7.72949 23.1363 7.72949 22.1026V21.1283M21.8535 19.1449C20.3145 17.2309 19.228 16.2565 19.228 10.9797C19.228 6.14752 16.7997 4.42595 14.8011 3.58983C14.5356 3.47899 14.2857 3.22444 14.2048 2.94736C13.8542 1.73489 12.8714 0.666748 11.5649 0.666748C10.2585 0.666748 9.27505 1.7355 8.92806 2.94858C8.84716 3.2287 8.59726 3.47899 8.33177 3.58983C6.33075 4.42717 3.90484 6.14265 3.90484 10.9797C3.90184 16.2565 2.81533 17.2309 1.27636 19.1449C0.638723 19.9377 1.19726 21.1283 2.31253 21.1283H20.8233C21.9326 21.1283 22.4875 19.9341 21.8535 19.1449Z"
        stroke={color || theme.palette.grey[400]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default BellIcon;
