import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const CircleIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="442" height="442" viewBox="0 0 442 442" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3640)">
        <path d="M442 0H0V442H442V0Z" fill={color || theme.palette.grey[400]} />
      </g>
      <defs>
        <clipPath id="clip0_2147_3640">
          <rect width="442" height="442" rx="221" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default CircleIcon;
