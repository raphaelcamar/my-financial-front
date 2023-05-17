import React from 'react';
import { Icon } from '@/core/domain';
import { useThemeContext } from '@/core/presenters/contexts/styled-theme/themes/provider';

export const ArrowLimitIcon: React.FC<Icon> = ({ color }) => {
  const theme = useThemeContext();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2147_3553)">
        <path
          d="M1.08658 0H8.58956V1.25H1.08658V0ZM1.52863 7.31687L4.21282 4.63374V10H5.46334V4.63374L8.14753 7.31687L9.03163 6.43313L4.83808 2.24125L0.644531 6.43313L1.52863 7.31687Z"
          fill={color || theme.palette.grey[400]}
        />
      </g>
      <defs>
        <clipPath id="clip0_2147_3553">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default ArrowLimitIcon;
