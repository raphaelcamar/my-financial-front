import { useTheme } from '@mui/material';
import React from 'react';

import { Icon } from './types';

export const QuestionMarkRoundedIcon: React.FC<Icon> = ({ color }) => {
  const theme = useTheme();
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.963 5.9C6.12757 5.43217 6.45241 5.03767 6.87997 4.78639C7.30753 4.53511 7.81023 4.44326 8.29902 4.5271C8.78782 4.61094 9.23117 4.86507 9.55055 5.24447C9.86994 5.62387 10.0447 6.10407 10.044 6.6C10.044 8 7.944 8.7 7.944 8.7M8 11.5H8.007M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        stroke={color || theme.palette.primary.main}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
