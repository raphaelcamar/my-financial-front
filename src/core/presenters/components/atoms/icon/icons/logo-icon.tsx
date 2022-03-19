import { useTheme } from '@mui/material';
import React from 'react';
import { Icon } from '@/core/domain';

export const LogoIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();

  return (
    <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.6133 21.0667C8.56 19.4933 6.61333 17.8667 6.61333 15.3333C6.61333 12.4267 9.30667 10.4 13.8133 10.4C18.56 10.4 20.32 12.6667 20.48 16H26.3733C26.1867 11.4133 23.3867 7.2 17.8133 5.84V0H9.81333V5.76C4.64 6.88 0.48 10.24 0.48 15.3867C0.48 21.5467 5.57333 24.6133 13.0133 26.4C19.68 28 21.0133 30.3467 21.0133 32.8267C21.0133 34.6667 19.7067 37.6 13.8133 37.6C8.32 37.6 6.16 35.1467 5.86667 32H0C0.32 37.84 4.69333 41.12 9.81333 42.2133V48H17.8133V42.2667C23.0133 41.28 27.1467 38.2667 27.1467 32.8C27.1467 25.2267 20.6667 22.64 14.6133 21.0667Z"
        fill={color || theme.palette.primary.main}
      />
    </svg>
  );
};
