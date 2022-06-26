import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Icon } from '@/core/domain';

export const LineArrowDownIcon: React.FC<Icon> = ({ color }) => {
  const theme = useContext(ThemeContext);
  return (
    <svg width="12" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 6.625L5 11L2 6.625M5 1L5 11L5 1Z"
        stroke={color || theme.palette.grey[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LineArrowDownIcon;
