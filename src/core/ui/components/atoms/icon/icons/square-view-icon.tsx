import React from 'react';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';
import { Icon } from '@/core/domain';

export const SquareViewIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3642)">
        <path
          d="M3.33333 0H0.555556C0.248731 0 0 0.248731 0 0.555556V3.33333C0 3.64016 0.248731 3.88889 0.555556 3.88889H3.33333C3.64016 3.88889 3.88889 3.64016 3.88889 3.33333V0.555556C3.88889 0.248731 3.64016 0 3.33333 0Z"
          fill={color || theme.palette.grey[400]}
        />
        <path
          d="M9.44466 0H6.66688C6.36006 0 6.11133 0.248731 6.11133 0.555556V3.33333C6.11133 3.64016 6.36006 3.88889 6.66688 3.88889H9.44466C9.75149 3.88889 10.0002 3.64016 10.0002 3.33333V0.555556C10.0002 0.248731 9.75149 0 9.44466 0Z"
          fill={color || theme.palette.grey[400]}
        />
        <path
          d="M3.33333 6.11133H0.555556C0.248731 6.11133 0 6.36006 0 6.66688V9.44466C0 9.75149 0.248731 10.0002 0.555556 10.0002H3.33333C3.64016 10.0002 3.88889 9.75149 3.88889 9.44466V6.66688C3.88889 6.36006 3.64016 6.11133 3.33333 6.11133Z"
          fill={color || theme.palette.grey[400]}
        />
        <path
          d="M9.44466 6.11133H6.66688C6.36006 6.11133 6.11133 6.36006 6.11133 6.66688V9.44466C6.11133 9.75149 6.36006 10.0002 6.66688 10.0002H9.44466C9.75149 10.0002 10.0002 9.75149 10.0002 9.44466V6.66688C10.0002 6.36006 9.75149 6.11133 9.44466 6.11133Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3642">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SquareViewIcon;
