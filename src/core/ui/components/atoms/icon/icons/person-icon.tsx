import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const PersonIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();

  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3627)">
        <path
          d="M5 5C6.38125 5 7.5 3.88125 7.5 2.5C7.5 1.11875 6.38125 0 5 0C3.61875 0 2.5 1.11875 2.5 2.5C2.5 3.88125 3.61875 5 5 5ZM5 6.25C3.33125 6.25 0 7.0875 0 8.75V10H10V8.75C10 7.0875 6.66875 6.25 5 6.25Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3627">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PersonIcon;
